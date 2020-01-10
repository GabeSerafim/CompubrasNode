const express = require('express')
const { body, check } = require('express-validator')
const router = express.Router();
const controller = require('../controllers/itempedido')

// router.get('/', controller.getAll);
// router.get('/:id', controller.getById);
// router.get('/search/:CodPedido', controller.getCodPedido);
// router.post('/', [], controller.addItemPedido);
// router.put('/', controller.putItemPedido);
// router.delete('/', controller.delItemPedido);

module.exports = router;