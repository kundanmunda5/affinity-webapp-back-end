const express = require("express");
const router = express.Router();

const controller = require("../uploadController");

let routes = (app) => {
  router.post("/upload-file", controller.uploadFile);

  router.get("/files", controller.getFilesList);

  router.get("/files/:name", controller.downloadFiles);
  
  router.delete("/files/:name", controller.deleteFiles);
  
  
  router.get('*', (req, res) => {
    res.send("Created by : Kundan Munda N S")});

  router.post('*', (req, res) => {
    res.send("Created by : Kundan Munda N S :: \t Wrong post address")});
    
  router.delete('*', (req, res) => {
    res.send("Created by : Kundan Munda N S :: \t Wrong delete address")});

  

  app.use(router);
};

module.exports = routes;
