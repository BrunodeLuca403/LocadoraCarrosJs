const LocacaoController = require('../controllers/LocacaoController');
const express = require('express');

const router = express.Router();

router.get('/', LocacaoController.listarLocacao);
router.get('/:id', LocacaoController.buscarPorId);
router.post('/', LocacaoController.salvarLocacao);
router.put('/:id', LocacaoController.atualizarLocacao);
router.delete('/:id', LocacaoController.excluirLocacao);

module.exports = router;
