const ClienteController = require('../controllers/ClienteController');
const express = require('express');

const router = express.Router();

router.get('/', ClienteController.listarCliente);
router.get('/:id', ClienteController.buscarPorId);
router.post('/', ClienteController.salvarCliente);
router.put('/:id', ClienteController.atualizarCliente);
router.delete('/:id', ClienteController.excluirCliente);

module.exports = router;
