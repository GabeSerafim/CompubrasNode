const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const Cliente = sequelize.define('cliente', {
    codCliente: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false
    },
    endereco: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    cep: {
        type: Sequelize.STRING,
        allowNull: false
    },
    uf: {
        type: Sequelize.CHAR,
        allowNull: false
    },
    iE: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Cliente;