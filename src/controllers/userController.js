module.exports = (app) => {
  app.get("/usuario", (req, res) => {
    res.send(
      "Rota ativada com GET e recurso usuário: valores de usuário devem ser retornados"
    );
  });
};
