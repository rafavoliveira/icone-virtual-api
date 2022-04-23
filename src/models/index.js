const modelProduto = require("./modelProduto");
const modelUsuario = require("./modelUsuario");
const modelFavorito = require("./modelFavorito");

modelUsuario.hasMany(modelFavorito, {
  foreignKey: "id_usuario",
});
modelFavorito.belongsTo(modelUsuario, {
  foreignKey: "id_usuario",
});

modelProduto.hasMany(modelFavorito, {
  foreignKey: "id_produto",
});
modelFavorito.belongsTo(modelProduto, {
  foreignKey: "id_produto",
});
module.exports = {
  modelFavorito,
  modelProduto,
  modelUsuario,
};
