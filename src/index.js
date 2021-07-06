const express = require("express");

const { APP_PORT } = require("../utils/appConfig");

const foneController = require("./controllers/foneController");
const userController = require("./controllers/userController");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

foneController(app);
userController(app);

app.listen(APP_PORT);
