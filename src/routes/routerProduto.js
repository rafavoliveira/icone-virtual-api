const express = require("express");
const routerProduto = express.Router();
const produtoController = require("../controllers/produtoController")

routerProduto.get("/produto", produtoController.listarProdutos);
routerProduto.post("/produto", produtoController.cadastrarProduto);
routerProduto.put("/produto/:idProduto", produtoController.atualizarProduto);
routerProduto.delete("/produto/:idProduto", produtoController.deletarProduto);

module.exports = routerProduto;
