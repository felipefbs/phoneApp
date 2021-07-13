const Fone = require("../models/foneModel");

class FoneController {
  constructor(database) {
    this.database = database;
  }

  index = (req, res) => {
    res.send({
      message: "Fones salvo no banco de dados",
      data: this.database,
    });
  };

  store = (req, res) => {
    const { model, manufacturer, type } = req.body;

    const fone = new Fone(model, manufacturer, type);

    this.database.push(fone);

    res.send({
      message: "Fone salvo no banco de dados",
      data: fone,
    });
  };
}

module.exports = FoneController;
