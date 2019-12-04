const Sequelize = require('sequelize');

const sequelize = require('../utils/database');

const ItemPedido = sequelize.define('itempedido',{
    CodItemPedido: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncremente: true
    },
    CodPedido: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    CodProduto: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    Quantidade: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
})

module.exports = ItemPedido;