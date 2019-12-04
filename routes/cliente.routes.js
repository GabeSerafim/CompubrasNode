const express = require('express')
const router = express.Router();
const controller = require('../controllers/cliente')

router.get('/',controller.getAll);
router.get('/:id',controller.getById);
router.post('/',controller.addCliente);

module.exports = router;