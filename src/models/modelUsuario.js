const db = require("../database");
const { DataTypes } = require("sequelize");

const usuario = db.define(
  "usuario",
  {
    idUsuario: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_usuario",
    },
    nomeUsuario: {
      type: DataTypes.STRING,
      field: "nome_usuario",
    },
    emailUsuario: {
      type: DataTypes.STRING,
      field: "email_usuario",
    },
    telefoneUsuario: {
      type: DataTypes.STRING,
      field: "telefone_usuario",
    },
  },
  { tableName: "usuario" }
);

module.exports = usuario;
