const ClienteController = require('../controllers/ClienteController');
const express = require('express');

const router = express.Router();

router.get('/', ClienteController.listarCliente);
router.get('/:idCliente', ClienteController.buscarPorId);
router.post('/', ClienteController.salvarCliente);
router.put('/:idCliente', ClienteController.atualizarCliente);
router.delete('/:idCliente', ClienteController.excluirCliente);

module.exports = router;
