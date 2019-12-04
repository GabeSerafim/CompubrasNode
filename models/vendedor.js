const Sequelize = require('sequelize');
const sequelize = require('../utils/database');

const Vendedor = sequelize.define('vendedor',{
    CodVendedor:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncremente: true,
        primaryKey: true
    },
    Nome:{
        type: Sequelize.STRING(45),
        allowNull: false
    },
    SalarioFixo:{
        type: Sequelize.DECIMAL(10,2),
        allowNull: false
    },
    FaixaComissao:{
        type: Sequelize.ENUM('A','B',"C","D"),
        allowNull: false
    }
})

module.exports = Vendedor;