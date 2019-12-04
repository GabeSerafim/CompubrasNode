const Sequelize = require('sequelize');
const sequelize = require('../utils/dataase');

const Produto = sequelize.define('produto',{
    CodProduto: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    Descricao: {
        type: Sequelize.STRING(100),
        allowNull: false
    },
    ValorUnitario: {
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    }
})

module.exports = Produto;