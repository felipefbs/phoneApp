const User = require("../models/userModel");

class UserController {
  constructor(database) {
    this.database = database;
  }

  show = (req, res) => {
    const name = req.params.name;

    this.database.forEach((user) => {
      if (user.name === name) {
        res.send({ data: user });
      }
    });
  };

  index = (req, res) => {
    res.send({
      message: "Usuários no banco de dados",
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

  delete = (req, res) => {
    const name = req.params.name;

    this.database = this.database.filter((user) => {
      return user.name !== name;
    });

    res.send({
      message: "Usuário removido do banco de dados",
      data: name,
    });
  };
}

module.exports = UserController;
