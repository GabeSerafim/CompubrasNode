const express = require('express')
const { body, check } = require('express-validator')
const router = express.Router();
const controller = require('../controllers/produto')

// router.get('/', controller.getAll);
// router.get('/:id', controller.getById);
// router.get('/search/:descricao', controller.getByDescricao);
// router.post('/', [], controller.addProduto);
// router.put('/', controller.putProduto);
// router.delete('/', controller.delProduto);

module.exports = router;