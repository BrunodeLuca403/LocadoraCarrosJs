const ClienteModel = require('../models/ClienteModel');

class ClienteController {

    async listarCliente(req, res){ 
        const listaClientes = await ClienteModel.find({});
        res.json(listaClientes);
    }

    async buscarPorId(req, res){
        const idcliente = req.params.idcliente;
        const cliente = await ClienteModel.findOne({'idcliente': idcliente});
        res.json(cliente);
    }

    async salvarCliente(req, res) {            
        const cliente = req.body;
        const max = await ClienteModel.findOne({}).sort({'idCliente': -1});
        cliente.idCliente = max == null ? 1 : max.idcliente + 1;
        const resultado = await ClienteModel.create(cliente);
        res.json(resultado);
    }

    async atualizarCliente(req, res){
        const idCliente = req.params.idCliente;
        const conteudo = req.body;
        const filtro = {'idcliente': idCliente};        
        const resultado = await ClienteModel.findOneAndUpdate(filtro, conteudo, {new: true});
        res.json(resultado);
    }

    async excluirCliente(req, res){
      const idCliente = req.params.idCliente;
      const filtro = {'idCliente': idCliente};
      await ClienteModel.findOneAndDelete(filtro);
      res.send("Cliente excluído com sucesso!");
    }
}

module.exports = new ClienteController();