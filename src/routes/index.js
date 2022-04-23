const express = require("express");
const router = express.Router();

const routerUsuario = require("./routerUsuario");
const routerProduto = require("./routerProduto");
const routerFavorito = require("./routerFavorito");

router.use(routerUsuario);
module.exports = router;
