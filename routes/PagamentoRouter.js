const PagamentoController = require('../controllers/PagamentoController');
const express = require('express');

const router = express.Router();

router.get('/', PagamentoController.listarPagamento);
router.get('/:id', PagamentoController.buscarPorId);
router.post('/', PagamentoController.salvarPagamento);
router.put('/:id', PagamentoController.atualizarPagamento);
router.delete('/:id', PagamentoController.excluirPagamento);

module.exports = router;
