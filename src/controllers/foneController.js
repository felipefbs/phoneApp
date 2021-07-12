const Fone = require("../models/foneModel");

class FoneController {
  constructor(database) {
    this.database = database;
  }

  show = (req, res) => {
    res.send(this.database);
  };

  store = (req, res) => {
    const fone = new Fone("Kuba Disco", "Fechado");
    console.log(fone);

    this.database.push(fone);

    res.send({ message: "Fone salvo no banco de dados", fone: fone });
  };
}

module.exports = FoneController;
