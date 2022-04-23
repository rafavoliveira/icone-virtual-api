const db = require("../database");
const { DataTypes } = require("sequelize");

const produto = db.define(
  "produto",
  {
    idProduto: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      field: "id_produto",
    },
    nomeProduto: {
      type: DataTypes.STRING,
      field: "nome_produto",
    },
    descricaoProduto: {
      type: DataTypes.TEXT,
      field: "descricao_produto",
    },
  },
  { tableName: "produto" }
);

module.exports = produto;
