const CarroModel = require('../models/CarroModel').CarroModel;

class CarroController {

    async listarCarros(req, res){ 
        const listaCarros = await CarroModel.find({});
        res.json(listaCarros);
    }

    async buscarPorId(req, res){
        const id = req.params.id;
        const carro = await CarroModel.findOne({'_id': id});
        res.json(carro);
    }

    async salvarCarro(req, res) {            
        const carro = req.body;
        const resultado = await CarroModel.create(carro);
        res.json(resultado);
    }

    async atualizarCarro(req, res){
        const id = req.params.id;
        const carro = req.body;      
        const resultado = await CarroModel.findOneAndUpdate({'_id': id}, carro, {new: true});
        res.json(resultado);
    }

    async excluirCarro(req, res){
      const id = req.params.id;
      await CarroModel.findOneAndDelete({'_id': id});
      res.send("Excluído(a) com sucesso!");
    }
}

module.exports = new CarroController();