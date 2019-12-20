let Produto = require ('../models/produto.js');
const {validationResult} = require('express-validator')

exports.getAll = (req, res, next) => {
    Produto.findAll()
        .then(produto => {
            res.json(produto)
        })
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.addProduto = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect');
        error.statusCode = 422;
        throw error;
    }
    Produto.create({
        codproduto: req.body.codproduto,
        descricao: req.body.descricao,
        valorunitario: req.body.valorunitario,
    })
        .then(produto => res.status(201).json(produto))
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.getById = (req, res, next) => {
    Produto.findByPk(req.params.id)
        .then((produto) => {
            res.json(produto)
        })
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.getByDescricao = (req, res, next) => {
    Produto.findAll({ where: { descricao: req.params.descricao } })
        .then((produto) => {
            res.json(produto)
        })
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.putProduto = (req, res, next) => {
    Produto.findByPk(req.body.codProduto)
        .then((produto) => {
            produto.codproduto = req.body.codproduto
            produto.descricao = req.body.descricao
            produto.valorunitario = req.body.valorunitario
            return produto.save();
        })
        .then(produto => res.json(produto))
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.delProduto = (req, res, next) => {
    Produto.findByPk(req.params.id)
        .then((produto) => {
            return produto.destroy();
        })
        .then(res => res.json(res))
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}