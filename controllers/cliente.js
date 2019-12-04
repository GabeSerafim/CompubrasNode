let Cliente = require('../models/cliente')

exports.getAll = (req, res, next) => {
    Cliente.fetchAll()
    .then(([rows,tableData]) => {
        res.json(rows)
    })
    .catch( err => {
        console.log(err);
    });
}

exports.addCliente = (req, res, next) => {
    const cliente = new Cliente(null, req.body.nome, req.body.endereco, req.body.cidade, req.body.cep, req.body.uf, req.body.iE);
    cliente.save();
}

exports.getById = (req, res, next) => {
    Cliente.getById(req.params.id)
        .then(([cliente]) => {
            res.json(cliente)
        })
        .catch(err => {
            console.log(err);
        });
}