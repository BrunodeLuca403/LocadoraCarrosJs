const LocacaoController = require('../controllers/LocacaoController');
const express = require('express');

const router = express.Router();

router.get('/', LocacaoController.listarLocacao);
router.get('/:idLocacao', LocacaoController.buscarPorId);
router.post('/', LocacaoController.salvarLocacao);
router.put('/:idLocacao', LocacaoController.atualizarLocacao);
router.delete('/:idLocacao', LocacaoController.excluirLocacao);

module.exports = router;
