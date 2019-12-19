let Cliente = require('../models/cliente')
const {validationResult} = require('express-validator')

exports.getAll = (req, res, next) => {
    Cliente.findAll()
    .then(products => {
        res.json(products)
    })
    .catch( err => {
        console.log(err);
    });
}

exports.addCliente = (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(422).json({
            message: 'Validation Failed',
            errors: errors.array()
        })
    }
    Cliente.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        cep: req.body.cep,
        uf: req.body.uf,
        iE: req.body.iE
    })
    .then(cliente => res.status(201).json(cliente))
    .catch(err => console.log(err));
}

exports.getById = (req, res, next) => {
    Cliente.findByPk(req.params.id)
        .then((cliente) => {
            res.json(cliente)
        })
        .catch(err => {
            console.log(err);
        });
}

exports.getByName = (req,res,next) =>{
    Cliente.findAll({where: {nome: req.params.nome}})
        .then((cliente) => {
            res.json(cliente)
        })
        .catch(err => {
            console.log(err);
        });
}

exports.putCliente = (req, res, next) => {
    Cliente.findByPk(req.body.codCliente)
        .then((cliente) => {
            cliente.codCliente = req.body.codCliente
            cliente.nome = req.body.nome
            cliente.endereco = req.body.endereco
            cliente.cidade = req.body.cidade
            cliente.cep = req.body.cep
            cliente.uf = req.body.uf
            cliente.iE = req.body.iE
            return cliente.save();
        })
        .then(cliente => res.json(cliente))
        .catch(err => {
            console.log(err);
        });
}

exports.delCliente = (req, res, next) => {
    Cliente.findByPk(req.params.id)
        .then((cliente) => {
            return cliente.destroy();
        })
        .then(res => res.json(res))
        .catch(err => {
            console.log(err);
        });
}