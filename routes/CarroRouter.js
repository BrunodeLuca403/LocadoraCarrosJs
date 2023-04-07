const CarroController = require('../controllers/CarroController');
const express = require('express');

const router = express.Router();

router.get('/', CarroController.listarCarros);
router.get('/:idCarro', CarroController.buscarPorId);
router.post('/', CarroController.salvarCarro);
router.put('/:idCarro', CarroController.atualizarCarro);
router.delete('/:idcarro', CarroController.excluirCarro);

module.exports = router;
