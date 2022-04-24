const produto = require("../models/modelProduto")

module.exports = {
  listarProdutos: async (req, res) => {
    try{
      const listagemProduto = await produto.findAll();
      res.status(200).json(listagemProduto)
    }catch(err){
      res.status(500).json(`${err}`);
    }
  },
  async cadastrarProduto(req,res){
    try{
      const {nomeProduto, descricaoProduto} = req.body;

      const produtoCadastrado = await produto.create({
        nomeProduto,
        descricaoProduto
      })

      res.status(201).json(produtoCadastrado)
    }catch(err){
      res.status(500).json(`${err}`)
    }
  },
  async atualizarProduto(req,res){
    try{
      const {idProduto} = req.params
      const {nomeProduto, descricaoProduto} = req.body

      const verificaProduto = await produto.findByPk(idProduto)

      if(!verificaProduto){
        return res.status(400).json("Esse produto não existe")
      }

      const produtoAtualizado = await produto.update(
        {
          nomeProduto,
          descricaoProduto
        },
        {
          where: {
          idProduto
        }
      })

      res.status(200).json(`As informações do produto ${nomeProduto} foram atualizadas com sucesso!`)
    }catch(err){
      res.status(500).json(`${err}`)
    }
  },
  async deletarProduto(req,res){
    try{
      const {idProduto} = req.params

      const verificaProduto = await produto.findByPk(idProduto)

      if(!verificaProduto){
        return res.status(400).json("Esse produto não existe")
      }

      await produto.destroy({
        where: {
          idProduto
        }
      })

      res.status(200).json("Produto deletado com sucesso!")
    }catch(err){
        res.status(500).json(`${err}`)
    }
  }

}