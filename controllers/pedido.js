let Pedido = require('../models/pedido');

exports.getAll = (req,res,next) => {
    Pedido.findAll()
    .then(pedido => res.json(pedido))
    .catch(err => {
        err.statusCode = 500;
        next(err);
    })
}

exports.addPedido = (req,res,next) => {
    Pedido.create({
        CodPedido: req.body.CodPedido,
        PrazoEntrega: req.body.PrazoEntrega,
        DataPedido: req.body.DataPedido,
        CodCliente: req.body.CodCliente,
        CodVendedor: req.body.CodVendedor
    })
    .then(pedido => res.json(pedido))
    .catch(err => {
        err.statusCode = 500;
        next(err);
    })
}

exports.getById = (req,res,next) => {
    Pedido.findByPk(req.params.id)
    .then(pedido => res.json(pedido))
    .catch(err => {
        err.statusCode = 500;
        next(err);
    })
}

exports.getByCliente = (req,res,next) => {
    Pedido.findAll({where: {CodCliente: req.params.codCliente}})
    .then(pedido => res.json(pedido))
    .catch(err => {
        err.statusCode = 500;
        next(err);
    })
}

exports.getByVendedor = (req,res,next) => {
    Pedido.findAll({where: {CodVendedor: req.params.codVendedor}})
    .then(pedido => res.json(pedido))
    .catch(err => {
        err.statusCode = 500;
        next(err);
    })
}

exports.putPedido = (req,res,next) => {
    Pedido.findByPk(req.body.CodPedido)
    .then(pedido => {
        pedido.CodPedido = req.body.CodPedido;
        pedido.PrazoEntrega = req.body.PrazoEntrega;
        pedido.DataPedido = req.body.DataPedido;
        pedido.CodCliente = req.body.CodCliente;
        pedido.CodVendedor = req.body.CodVendedor;
        return pedido.save()
    })
    .then(pedido => res.json(pedido))
    .catch(err => {
        err.statusCode = 500;
        next(err);
    })
}

exports.delPedido = (req,res,next) => {
    Pedido.findByPk(req.body.CodPedido)
    .then(pedido => {
        return pedido.destroy()
    })
    .then(pedido => res.json(pedido))
    .catch(err => {
        err.statusCode = 500;
        next(err);
    })
}