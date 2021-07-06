module.exports = function (app) {
  app.get("/fone", (req, res) => {
    res.send(
      "Rota ativada com GET e recurso fone: valores de fone devem ser retornados"
    );
  });
};
