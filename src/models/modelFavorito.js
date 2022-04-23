const db = require("../database");
const { DataTypes } = require("sequelize");

const modelUsuario = require("./modelUsuario");
const modelProduto = require("./modelProduto");

const favoritos = db.define(
  "favoritos",
  {
    idFavorito: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKay: true,
      fiel: "id_favorito",
    },
    statusFavorito: {
      type: DataTypes.CHAR,
      field: "status",
    },
    idUsuario: {
      type: DataTypes.INTEGER,
      field: "id_usuario",
      references: {
        model: modelUsuario,
        key: "id_usuario",
      },
    },
    idProduto: {
      type: DataTypes.INTEGER,
      field: "id_produto",
      references: {
        model: modelProduto,
        key: "id_produto",
      },
    },
  },
  { tableName: "favoritos" }
);

module.exports = favoritos;
