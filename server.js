const path = require('path');

const express = require('express');

const root = require('./utils/path');
const routes = require('./routes/index.routes.js');

const app = express();

app.use(routes);
app.use((req, res) => {
    res.status(404)
})
app.listen(8080)