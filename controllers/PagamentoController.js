const PagamentoModel = require('../models/PagamentoModel');

class PagamentoController {

    async listarPagamento(req, res){ 
        const listaPagamentos = await PagamentoModel.find({});
        res.json(listaPagamentos);
    }

    async buscarPorId(req, res){
        const idPagamento = req.params.idPagamento;
        const pagamento = await PagamentoModel.findOne({'idPagamento': idPagamento});
        res.json(pagamento);
    }

    async salvarPagamento(req, res) {            
        const pagamento = req.body;
        const max = await PagamentoModel.findOne({}).sort({'idPagamento': -1});
        pagamento.idPagamento = max == null ? 1 : max.idPagamento + 1;
        const resultado = await PagamentoModel.create(pagamento);
        res.json(resultado);
    }

    async atualizarPagamento(req, res){
        const idPagamento = req.params.idPagamento;
        const conteudo = req.body;
        const filtro = {'idPagamento': idPagamento};        
        const resultado = await PagamentoModel.findOneAndUpdate(filtro, conteudo, {new: true});
        res.json(resultado);
    }

    async excluirPagamento(req, res){
      const idPagamento = req.params.idPagamento;
      const filtro = {'idPagamento': idPagamento};
      await PagamentoModel.findOneAndDelete(filtro);
      res.send("Pagamento excluído com sucesso!");
    }
}

module.exports = new PagamentoController();