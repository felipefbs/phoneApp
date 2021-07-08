function getUser(app) {
  app.get("/usuario", (req, res) => {
    res.send(
      "Rota ativada com GET e recurso usuário: valores de usuário devem ser retornados"
    );
  });
}

function insertUser(app) {
  app.post("/usuario", (req, res) => {
    res.send("Usuario inserido no banco de dados");
  });
}

module.exports = { getUser, insertUser };
