const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Pedido = sequelize.define('pedido',{
    CodPedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true
    },
    PrazoEntrega: {
        type: Sequelize.DATE,
        allowNull: false,
    },
    DataPedido:{
        type: Sequelize.DATE,
        allowNull: false,
    },
    CodCliente:{
        type: Sequelize.INTEGER,
        allowNull: false
    },
    CodVendedor:{
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = Pedido;