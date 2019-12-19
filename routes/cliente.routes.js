const express = require('express')
const router = express.Router();
const controller = require('../controllers/cliente')

router.get('/',controller.getAll);
router.get('/:id', controller.getById);
router.get('/search/:nome', controller.getByName);
router.post('/', controller.addCliente);
router.put('/', controller.putCliente);
router.del('/', controller.delCliente);

module.exports = router;