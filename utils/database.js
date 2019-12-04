const Sequelize = require('sequelize');
const sequelize = new Sequelize('compubras','root','root',{
    dialect: 'mysql',
    host:'localhost',
    define: {
        timestamps: false,
        freezeTableName: true
    }
})

module.exports = sequelize;