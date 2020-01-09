const express = require('express')
const router = express.Router();
const cliente = require('./cliente.routes');
const itempedido = require('./itempedido.routes');
const pedido = require('./pedido.routes');
const produto = require('./produto.routes');
const vendedor = require('./vendedor.routes');

router.use('/cliente',cliente);
router.use('/itempedido', itempedido);
router.use('/pedido', pedido);
router.use('/produto', produto);
router.use('/vendedor', vendedor);

module.exports = router;