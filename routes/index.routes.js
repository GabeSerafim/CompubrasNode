const express = require('express')
const router = express.Router();
const cliente = require('./cliente.routes');

router.use('/cliente',cliente)

module.exports = router;