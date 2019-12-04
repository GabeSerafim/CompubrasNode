let Cliente = require('../models/cliente')

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
    Cliente.create({
        nome: req.body.nome,
        endereco: req.body.endereco,
        cidade: req.body.cidade,
        cep: req.body.cep,
        uf: req.body.uf,
        iE: req.body.iE
    })
    .then(cliente => res.json(cliente))
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