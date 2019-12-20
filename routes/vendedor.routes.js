const express = require('express')
const { body, check } = require('express-validator')
const router = express.Router();
const controller = require('../controllers/vendedor')

router.get('/', controller.getAll);
router.get('/:id', controller.getById);
router.get('/search/:descricao', controller.getByDescricao);
router.post('/', [], controller.addVendedor);
router.put('/', controller.putVendedor);
router.delete('/', controller.delVendedor);

module.exports = router;