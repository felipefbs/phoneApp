const express = require("express");

// Define a porta utilizada pelo servidor
const { APP_PORT } = require("./utils/appConfig");

// Importa as classes que controlam as requisições dos Fones e do Usuários
const FoneController = require("./controllers/foneController");
const UserController = require("./controllers/userController");

// Importa a conexão com o banco de dados
const database = require("./infra/sqlite-db");

// Importa objeto de acesso aos dados
const UserDAO = require("./dao/usersDAO");

// Instancia um novo DAO para ser utilizado pelos controllers
const usersDAO = new UserDAO(database);

// Instancia os Controllers das entidades
const foneController = new FoneController(database);
const userController = new UserController(usersDAO);

// Cria uma nova aplicação express
const app = express();

// Utiliza o middleware para dar json parse em todas as requisições
app.use(express.json());

// Definição de uma rota de teste
app.get("/", function (req, res) {
  res.send({ message: "Hello, World!" });
});

// Definição do conjunto de rotas dos fones
app.get("/fones/:model", foneController.show);
app.get("/fones", foneController.index);
app.post("/fones", foneController.store);
app.delete("/fones/:model", foneController.delete);

// Definição do conjunto de rotas dos usuários
app.get("/users/:name", userController.show);
app.get("/users", userController.index);
app.post("/users", userController.store);
app.put("/users/:name", userController.update);
app.delete("/users/:name", userController.delete);

// Servidor escutando na porta APP_PORT=3000
app.listen(APP_PORT, () => {
  console.log(`listening on port ${APP_PORT}`);
});
