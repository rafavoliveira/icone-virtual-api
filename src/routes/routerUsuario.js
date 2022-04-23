const express = require("express");
const routerUsuario = express.Router();

const usuarioController = require("../controllers/usuarioController");
routerUsuario.get("/usuario", usuarioController.listarUsuario);
routerUsuario.post("/usuario", usuarioController.cadastrarUsuario);
routerUsuario.put("/usuario/:idUsuario", usuarioController.atualizarUsuario);
routerUsuario.delete("/usuario/:idUsuario", usuarioController.deletarUsuario);

module.exports = routerUsuario;
