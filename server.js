const path = require('path');

const express = require('express');
const bodyParser = require('body-parser')

const root = require('./utils/path');
const sequelize = require('./utils/database');
const routes = require('./routes/index.routes.js');
const app = express();

app.use(bodyParser.json())
app.use(routes);
app.use((req, res) => {
    res.status(404)
})
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({message: message})
})
sequelize.sync()
.then(result => {
    app.listen(8080)
})
.catch(err => console.log(err));