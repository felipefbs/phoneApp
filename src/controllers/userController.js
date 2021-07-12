const User = require("../models/userModel");

class UserController {
  constructor(database) {
    this.database = database;
  }

  show = (req, res) => {
    res.send(this.database);
  };

  store = (req, res) => {
    const user = new User(
      "Felipe Ferreira",
      "felipe.ferreira@resilia.com.br",
      "umasenhasegura"
    );

    this.database.push(user);

    res.send(user);
  };
}

module.exports = UserController;
