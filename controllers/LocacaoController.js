const LocacaoModel = require('../models/LocacaoModel').LocacaoModel;

class LocacaoController {

    async listarLocacao(req, res){ 
        const listarLocacao = await LocacaoModel.find({});
        res.json(listarLocacao);
    }

    async buscarPorId(req, res){
        const id = req.params.id;
        const locacao = await LocacaoModel.findOne({'_id': id});
        res.json(locacao);
    }

    async salvarLocacao(req, res) {            
        const locacao = req.body;
        const resultado = await LocacaoModel.create(locacao);
        res.json(resultado);
    }

    async atualizarLocacao(req, res){
        const id = req.params.id;
        const locacao = req.body;      
        const resultado = await LocacaoModel.findOneAndUpdate({'_id': id}, locacao, {new: true});
        res.json(resultado);
    }

    async excluirLocacao(req, res){
      const id = req.params.id;
      await LocacaoModel.findOneAndDelete({'_id': id});
      res.send("Excluído(a) com sucesso!");
    }
}

module.exports = new LocacaoController();