    const PagamentoModel = require('../models/PagamentoModel').PagamentoModel;

    class PagamentoController {

        async listarPagamento(req, res){ 
            const listaPagamentos = await PagamentoModel.find({});
            res.json(listaPagamentos);
        }

        async buscarPorId(req, res){
            const id = req.params.id;
            const pagamento = await PagamentoModel.findOne({'_id': id});
            res.json(pagamento);
        }

        async salvarPagamento(req, res) {            
            const pagamento = req.body;
            const resultado = await PagamentoModel.create(pagamento);
            res.json(resultado);
        }

        async atualizarPagamento(req, res){
            const id = req.params.id;
            const pagamento = req.body;      
            const resultado = await PagamentoModel.findOneAndUpdate({'_id': id}, pagamento, {new: true});
            res.json(resultado);
        }

        async excluirPagamento(req, res){
        const id = req.params.id;
        await PagamentoModel.findOneAndDelete({'_id': id});
        res.send("Excluído(a) com sucesso!");
        }
    }

    module.exports = new PagamentoController();