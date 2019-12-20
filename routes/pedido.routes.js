const express = require('express')
const { body, check } = require('express-validator')
const router = express.Router();
const controller = require('../controllers/pedido')

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/search/:CodCliente', controller.getByCliente);
router.get('/search/:CodVendedor', controller.getByVendedor);
router.post('/', [], controller.addPedido);
router.put('/', controller.putPedido);
router.delete('/', controller.delPedido);

module.exports = router;