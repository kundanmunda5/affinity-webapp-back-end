const upload = require("./middleware/fileUpload");
const fs = require("fs");


const URL = "http://localhost:8888/get-cfiles/";
// const URL = "https://affinity-web-app-backend.herokuapp.com/get-cfiles/";

//upload files operation

const uploadFile = async (req, res) => {
  try {
    console.log(req);
    await upload(req, res);

    if (req.file == undefined) {
      return res.status(400).send({ message: "Choose a file to upload" });
    }

    res.status(200).send({
      message: "File uploaded successfully: " + req.file.originalname,
    });
  } catch (err) {
    console.log("Error while uploading file: ");

    if (err.code == "LIMIT_FILE_SIZE") {
      return res.status(500).send({
        message: "File size should be less than 5MB",
      });
    }

    res.status(500).send({
      message: `Error occured: ${err}`,
    });
  }
};

//get file list operation
const getFilesList = (req, res) => {
  const path = __basedir + "/public/uploads/";

  fs.readdir(path, function (err, files) {
    if (err) {
      res.status(500).send({
        message: "Files not found.",
      });
    }

    let filesList = [];

    files.forEach((file) => {
      filesList.push({
        name: file,
        url: URL + file,
      });
    });

    res.status(200).send(filesList);
  });
};


//  downloadFiles operation

const downloadFiles = (req, res) => {
    const fileName = req.params.name;
    const path = __basedir + "/public/uploads/";
    // res.send(fs.send)
    res.download(path+fileName)
};
// Delete file operations  
const deleteFiles = (req, res) => {
    const fileName = req.params.name;
    const path = __basedir + "/public/uploads/";
    // res.send(fs.send)
    fs.unlink(path+fileName,(err)=>{
      if(err) res.send("Error :: ",err);

      res.send(`File : ${fileName} deleted successfully from the server`);
    })
    
};
  

module.exports = { uploadFile, downloadFiles, getFilesList, deleteFiles};