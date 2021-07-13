const Fone = require("../models/foneModel");

class FoneController {
  constructor(database) {
    this.database = database;
  }

  show = (req, res) => {
    const model = req.params.model;

    this.database.forEach((fone) => {
      if (fone.model === model) {
        res.send({ data: fone });
      }
    });
  };

  index = (req, res) => {
    res.send({
      message: "Fones no banco de dados",
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

  delete = (req, res) => {
    const model = req.params.model;

    this.database = this.database.filter((fone) => {
      return fone.model !== model;
    });

    res.send({
      message: "Fone removido do banco de dados",
      data: model,
    });
  };
}

module.exports = FoneController;
