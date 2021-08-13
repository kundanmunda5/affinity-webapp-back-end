const express = require("express");
const cors = require("cors");
const app = express();

global.__basedir = __dirname;


const evokeRoutes = require("./routes/uploadRoute");


app.use(cors());

app.use(express.urlencoded({ 
  extended: true 
}));

evokeRoutes(app);

// Handle error
app.use((req, res, next) => {
  setImmediate(() => {
    next(new Error('Error occured'));
  });
});

app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

const port = process.env.PORT || 8888;
app.listen(port, () => {
  console.log('Connected to port ' + port)
})