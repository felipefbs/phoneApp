const express = require("express");

const { APP_PORT } = require("./utils/appConfig");

const FoneController = require("./controllers/foneController");
const UserController = require("./controllers/userController");

const database = require("./infra/database");

const app = express();

const foneController = new FoneController(database.foneDB);
const userController = new UserController(database.userDB);

app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.get("/fones", foneController.index);
app.post("/fones", foneController.store);

app.get("/users/:name", userController.show);
app.get("/users", userController.index);
app.post("/users", userController.store);
app.delete("/users/:name", userController.delete);

app.listen(APP_PORT);
