const User = require("../models/userModel");

class UserController {
  constructor(database) {
    this.database = database;
  }

  index = (req, res) => {
    res.send({
      message: "Usuários salvos no banco de dados",
      data: this.database,
    });
  };

  store = (req, res) => {
    const { name, email, password } = req.body;

    const user = new User(name, email, password);

    this.database.push(user);

    res.send({
      message: "Usuário salvo no banco de dados",
      data: user,
    });
  };
}

module.exports = UserController;
