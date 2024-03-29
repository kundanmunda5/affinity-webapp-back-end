const util = require("util");
const multer = require("multer");

const DIR = './public/uploads/';

let storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, DIR);
    },
    filename: (req, file, cb) => {
        const fileName = file.originalname.toLowerCase().split(' ').join('-');
        cb(null, fileName)
    },
});

let upload = multer({
    storage: storage,
    limits: {
        fileSize: 1024 * 1024 * 5
    },
    fileFilter: (req, file, cb) => {
      
        if (file.mimetype == "text/csv" || file.mimetype == "text/xlsx" || file.mimetype == "text/txt" || file.mimetype == "text/xls" || file.mimetype == "application/vnd.ms-excel") {
            cb(null, true);
        } else {
            cb(null, false);
            return cb(new Error('File types allowed .csv, .xlsx and .txt!'));
        }
    }
}).single("file");

let fileUploadMiddleware = util.promisify(upload);

module.exports = fileUploadMiddleware;