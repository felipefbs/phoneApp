const express = require("express");

// Define a porta utilizada pelo servidor
const { APP_PORT } = require("./utils/appConfig");

// Importa as classes que controlam as requisições dos Fones e do Usuários
const FoneController = require("./controllers/foneController");
const UserController = require("./controllers/userController");

// Importa a conexão com o banco de dados
const database = require("./infra/sqlite-db");

const UserDAO = require("./dao/usersDAO");

const userDAO = new UserDAO(database);

// Instancia os Controllers das entidades
const foneController = new FoneController(database);
const userController = new UserController(userDAO);

// Cria uma nova aplicação express
const app = express();

// Utiliza o middleware para dar json parse em todas as requisições
app.use(express.json());

app.get("/", function (req, res) {
  res.send({ message: "Hello, World!" });
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
