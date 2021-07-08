function getFone(app) {
  app.get("/fone", (req, res) => {
    res.send(
      "Rota ativada com GET e recurso fone: valores de fone devem ser retornados"
    );
  });
}

function insertFone(app) {
  app.post("/fone", (req, res) => {
    res.send("Post feito com sucesso");
  });
}

module.exports = { getFone, insertFone };
