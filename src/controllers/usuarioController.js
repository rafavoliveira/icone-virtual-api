const usuario = require("../models/modelUsuario");

module.exports = {
  listarUsuario: async (req, res) => {
    try {
      const listagemUsuario = await usuario.findAll();
      res.status(200).json(listagemUsuario);
    } catch (err) {
      res.status(500).json(`${err}`);
    }
  },
  async cadastrarUsuario(req, res) {
    try {
      const { nomeUsuario, emailUsuario, telefoneUsuario } = req.body;

      const usuarioCadastrado = await usuario.create({
        nomeUsuario,
        emailUsuario,
        telefoneUsuario,
      });

      res.status(201).json(usuarioCadastrado);
    } catch (err) {
      res.status(500).json(`${err}`);
    }
  },
  async atualizarUsuario(req, res) {
    try {
      const { idUsuario } = req.params;
      const { nomeUsuario, emailUsuario, telefoneUsuario } = req.body;

      const verificaUsuario = await usuario.findByPk(idUsuario);

      if (!verificaUsuario) {
        return res.status(400).json("Esse usuário não existe!");
      }

      const usuarioatualizado = await usuario.update(
        {
          nomeUsuario,
          emailUsuario,
          telefoneUsuario,
        },
        {
          where: {
            idUsuario,
          },
        }
      );

      res
        .status(200)
        .json(`O(a) usuário(a) ${nomeUsuario} foi atualizado(a) com sucesso`);
    } catch (err) {
      res.status(500).json(`${err}`);
    }
  },
  async deletarUsuario(req, res) {
    try {
      const { idUsuario } = req.params;
      const verificaUsuario = await usuario.findByPk(idUsuario);

      if (!verificaUsuario) {
        return res.status(400).json("Esse usuário não existe");
      }

      const usuarioDeletado = await usuario.destroy({
        where: {
          idUsuario,
        },
      });

      res.status(200).json(`Usuário deletado com sucesso`);
    } catch (err) {
      res.status(500).json(`${err}`);
    }
  },
};
