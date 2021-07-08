const express = require("express");

const { APP_PORT } = require("../utils/appConfig");

const { getFone, insertFone } = require("./controllers/foneController");
const { getUser, insertUser } = require("./controllers/userController");

const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

getFone(app);
insertFone(app);
getUser(app);
insertUser(app);

app.listen(APP_PORT);
