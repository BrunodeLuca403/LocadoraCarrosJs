const ClienteModel = require('../models/ClienteModel').ClienteModel;

class ClienteController {

    async listarCliente(req, res){ 
        const listaClientes = await ClienteModel.find({});
        res.json(listaClientes);
    }

    async buscarPorId(req, res){
        const id = req.params.id;
        const cliente = await ClienteModel.findOne({'_id': id});
        res.json(cliente);
    }

    async salvarCliente(req, res) {            
        const cliente = req.body;
        const resultado = await ClienteModel.create(cliente);
        res.json(resultado);
    }


    async atualizarCliente(req, res){
        const id = req.params.id;
        const cliente = req.body;      
        const resultado = await ClienteModel.findOneAndUpdate({'_id': id}, cliente, {new: true});
        res.json(resultado);
    }


    async excluirCliente(req, res){
      const id = req.params.id;
      await ClienteModel.findOneAndDelete({'_id': id});
      res.send("Excluído(a) com sucesso!");
    }
}

module.exports = new ClienteController();