class UserDAO {
  constructor(database) {
    this.db = database;
  }

  getOneUser = (name) => {
    return new Promise((resolve, reject) => {
      this.db.get(
        "SELECT * FROM USUARIOS WHERE NOME LIKE ?",
        name,
        (err, rows) => {
          if (!err) {
            resolve(rows);
          } else {
            reject(err);
          }
        }
      );
    });
  };

  getAllUsers = () => {
    return new Promise((resolve, reject) => {
      this.db.all("SELECT * FROM USUARIOS", (err, rows) => {
        if (err) {
          reject(err);
        } else {
          resolve(rows);
        }
      });
    });
  };

  insertUser = (user) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        `INSERT INTO USUARIOS (NOME, EMAIL, SENHA) VALUES (?, ?, ?)`,
        user.name,
        user.email,
        user.password,
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(user);
          }
        }
      );
    });
  };

  updateUser = (user, userName) => {
    return new Promise((resolve, reject) => {
      this.db.run(
        "UPDATE USUARIOS SET NOME = ?, EMAIL = ?, SENHA = ? WHERE NOME = ?",
        [user.name, user.email, user.password, userName],
        (err) => {
          if (err) {
            reject(err);
          } else {
            resolve(true);
          }
        }
      );
    });
  };

  removeUser = (name) => {
    return new Promise((resolve, reject) => {
      this.db.run("DELETE FROM USUARIOS WHERE NOME like ?", name, (err) => {
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });
  };
}

module.exports = UserDAO;
