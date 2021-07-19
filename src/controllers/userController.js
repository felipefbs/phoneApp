const User = require("../models/userModel");

class UserController {
  constructor(dbConn) {
    this.dbConn = dbConn;
  }

  show = (req, res) => {
    const name = req.params.name;

    this.dbConn
      .getOneUser(name)
      .then((user) => {
        res.send(user);
      })
      .catch((err) => {
        throw err;
      });
  };

  index = (req, res) => {
    this.dbConn
      .getAllUsers()
      .then((users) => {
        res.send(users);
      })
      .catch((err) => {
        throw err;
      });
  };

  store = (req, res) => {
    const { name, email, password } = req.body;

    const user = new User(name, email, password);

    this.dbConn
      .insertUser(user)
      .then((resolve) => {
        res.send({
          message: "Usuário salvo no banco de dados",
          data: resolve,
        });
      })
      .catch((err) => {
        throw err;
      });
  };

  update = (req, res) => {
    const userName = req.params.name;

    const { name, email, password } = req.body;

    const user = new User(name, email, password);

    this.dbConn
      .updateUser(user, userName)
      .then(() => {
        res.send({ message: "Usuário alterado com sucesso", data: user });
      })
      .catch((err) => {
        throw err;
      });
  };

  delete = (req, res) => {
    const name = req.params.name;

    this.dbConn
      .removeUser(name)
      .then((resolve) => {
        if (resolve) {
          res.send({
            message: "Usuário removido do banco de dados",
            data: name,
          });
        }
      })
      .catch((err) => {
        throw err;
      });
  };
}

module.exports = UserController;
