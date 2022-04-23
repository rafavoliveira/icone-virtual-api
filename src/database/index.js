const Sequelize = require("sequelize");

const DB_NAME = "teste_tecnico";
const DB_USER = "root";
const DB_PASS = "";
const DB_CONFIG = {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
  define: {
    timestamps: false,
  },
};

let db = {};

try {
  db = new Sequelize(DB_NAME, DB_USER, DB_PASS, DB_CONFIG);
} catch (err) {
  console.log("Erro ao se conectar com o banco de dados");
}

async function hasConnection() {
  try {
    await db.authenticate();
    console.log("Banco de dados Conectado");
  } catch (err) {
    console.log("Erro no autenticação com o banco");
  }
}

Object.assign(db, { hasConnection });

module.exports = db;
