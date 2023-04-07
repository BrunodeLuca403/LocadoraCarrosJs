const LocacaoModel = require('../models/LocacaoModel');

class LocacaoController {

    async listarLocacao(req, res){ 
        const listarLocacao = await LocacaoModel.find({});
        res.json(listarLocacao);
    }

    async buscarPorId(req, res){
        const idLocacao = req.params.idLocacao;
        const locacao = await LocacaoModel.findOne({'idLocacao': idLocacao});
        res.json(locacao);
    }

    async salvarLocacao(req, res) {            
        const locacao = req.body;
        const max = await LocacaoModel.findOne({}).sort({'idLocacao': -1});
        locacao.idLocacao = max == null ? 1 : max.idLocacao + 1;
        const resultado = await LocacaoModel.create(locacao);
        res.json(resultado);
    }

    async atualizarLocacao(req, res){
        const idLocacao = req.params.idLocacao;
        const conteudo = req.body;
        const filtro = {'idLocacao': idLocacao};        
        const resultado = await LocacaoModel.findOneAndUpdate(filtro, conteudo, {new: true});
        res.json(resultado);
    }

    async excluirLocacao(req, res){
      const idLocacao = req.params.idLocacao;
      const filtro = {'idLocacao': idLocacao};
      await LocacaoModel.findOneAndDelete(filtro);
      res.send("Locação excluído com sucesso!");
    }
}

module.exports = new LocacaoController();