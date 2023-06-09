const CarroController = require('../controllers/CarroController');
const express = require('express');

const router = express.Router();

router.get('/', CarroController.listarCarros);
router.get('/:id', CarroController.buscarPorId);
router.post('/', CarroController.salvarCarro);
router.put('/:id', CarroController.atualizarCarro);
router.delete('/:id', CarroController.excluirCarro);

module.exports = router;
