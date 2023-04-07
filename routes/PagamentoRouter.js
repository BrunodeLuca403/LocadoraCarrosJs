const PagamentoController = require('../controllers/PagamentoController');
const express = require('express');

const router = express.Router();

router.get('/', PagamentoController.listarPagamento);
router.get('/:idPagamento', PagamentoController.buscarPorId);
router.post('/', PagamentoController.salvarPagamento);
router.put('/:idPagamento', PagamentoController.atualizarPagamento);
router.delete('/:idPagamento', PagamentoController.excluirPagamento);

module.exports = router;
