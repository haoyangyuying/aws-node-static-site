const serverless = require("serverless-http");
const express = require("express");
const bodyParser = require("body-parser");


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", function(req, res) {
  res.status(200).render("index");
});

module.exports.awesomeSite = serverless(app);
