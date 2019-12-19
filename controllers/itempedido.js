let ItemPedido = require('../models/itempedido');

exports.getAll = (req, res, next) => {
    ItemPedido.findAll()
    .then(products => res.json(products))
    .catch(err => console.log(err))
}

exports.addItemPedido = (req, res, next) => {
    ItemPedido.create({
        CodItemPedido: req.body.CodItemPedido,
        CodPedido: req.body.CodPedido,
        CodProduto: req.body.CodProduto,
        Quantidade: req.body.Quantidade
    })
    .then(itempedido => res.json(itempedido))
    .catch(err => console.log(err))
}

exports.getById = (req, res, next) =>{
    ItemPedido.findByPk(req.params.id)
    .then(itempedido => res.json(itempedido))
    .catch(err => console.log(err))
}

exports.getCodPedido = (req,res,next) => {
    ItemPedido.findAll({where: {CodPedido: req.body.CodPedido}})
    .then(itempedido => res.json(itempedido))
    .catch(err => console.log(err))
}

exports.getCodProduto = (req, res, next) => {
    ItemPedido.findAll({ where: { CodProduto: req.body.CodProduto } })
        .then(itempedido => res.json(itempedido))
        .catch(err => console.log(err))
}