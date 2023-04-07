const CarroModel = require('../models/CarroModel');

class CarroController {

    async listarCarros(req, res){ 
        const listaCarros = await CarroModel.find({});
        res.json(listaCarros);
    }

    async buscarPorId(req, res){
        const idcarro = req.params.idcarro;
        const carro = await CarroModel.findOne({'idcarro': idcarro});
        res.json(carro);
    }

    async salvarCarro(req, res) {            
        const carro = req.body;
        const max = await CarroModel.findOne({}).sort({'idCarro': -1});
        carro.idCarro = max == null ? 1 : max.idCarro + 1;
        const resultado = await CarroModel.create(carro);
        res.json(resultado);
    }

    async atualizarCarro(req, res){
        const idCarro = req.params.idcarro;
        const conteudo = req.body;
        const filtro = {'idCarro': idCarro};        
        const resultado = await CarroModel.findOneAndUpdate(filtro, conteudo, {new: true});
        res.json(resultado);
    }

    async excluirCarro(req, res){
      const idcarro = req.params.idcarro;
      const filtro = {'idcarro': idcarro};
      await CarroModel.findOneAndDelete(filtro);
      res.send("Carro excluído com sucesso!");
    }
}

module.exports = new CarroController();