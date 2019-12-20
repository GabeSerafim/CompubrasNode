let Vendedor = require('../models/vendedor')
const { validationResult } = require('express-validator')

exports.getAll = (req, res, next) => {
    Vendedor.findAll()
        .then(vendedor => {
            res.json(vendedor)
        })
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.addVendedor = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        const error = new Error('Validation failed, entered data is incorrect');
        error.statusCode = 422;
        throw error;
    }
    Vendedor.create({
        codvendedor: req.body.codvendedor,
        nome: req.body.nome,
        salariofixo: req.body.salariofixo,
        faixacomissao: req.body.faixacomissao,
    })
        .then(vendedor => res.status(201).json(vendedor))
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.getById = (req, res, next) => {
    Vendedor.findByPk(req.params.id)
        .then((vendedor) => {
            res.json(vendedor)
        })
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.getByName = (req, res, next) => {
    Vendedor.findAll({ where: { nome: req.params.nome } })
        .then((vendedor) => {
            res.json(vendedor)
        })
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.putVendedor = (req, res, next) => {
    Vendedor.findByPk(req.body.codVendedor)
        .then((vendedor) => {
            vendedor.codvendedor = req.body.codvendedor
            vendedor.nome = req.body.nome
            vendedor.salariofixo = req.body.salariofixo
            vendedor.faixacomissao = req.body.faixacomissao
            return vendedor.save();
        })
        .then(vendedor => res.json(vendedor))
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}

exports.delVendedor = (req, res, next) => {
    Vendedor.findByPk(req.params.id)
        .then((vendedor) => {
            return vendedor.destroy();
        })
        .then(res => res.json(res))
        .catch(err => {
            err.statusCode = 500;
            next(err);
        });
}