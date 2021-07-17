const express = require("express");

const { APP_PORT } = require("./utils/appConfig");

const FoneController = require("./controllers/foneController");
const UserController = require("./controllers/userController");

const database = require("./infra/sqlite-db");

const app = express();

const foneController = new FoneController(database);
const userController = new UserController(database);

app.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

app.use(express.json());

app.get("/", function (req, res) {
  res.send("Hello, World!");
});

app.get("/fones/:model", foneController.show);
app.get("/fones", foneController.index);
app.post("/fones", foneController.store);
app.delete("/fones/:model", foneController.delete);

app.get("/users/:name", userController.show);
app.get("/users", userController.index);
app.post("/users", userController.store);
app.put("/users/:name", userController.update);
app.delete("/users/:name", userController.delete);

app.listen(APP_PORT);
