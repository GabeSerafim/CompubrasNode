const express = require('express')
const {body, check} = require('express-validator')
const router = express.Router();
const controller = require('../controllers/cliente')

router.get('/',controller.getAll);
router.get('/:id', controller.getById);
router.get('/search/:nome', controller.getByName);
router.post('/',[
    body('nome').trim().not().isEmpty(),
    body('endereco').trim().not().isEmpty(),
    body('cidade').trim().not().isEmpty(),
    body('cep').trim().not().isEmpty(),
    body('uf').trim().not().isEmpty(),
    body('iE').trim().not().isEmpty(),
], controller.addCliente);
router.put('/', controller.putCliente);
router.delete('/', controller.delCliente);

module.exports = router;