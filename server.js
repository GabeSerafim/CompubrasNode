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
sequelize.sync()
.then(result => {
    app.listen(8080)
})
.catch(err => console.log(err));