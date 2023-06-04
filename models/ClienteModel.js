const mongoose = require('mongoose');
const LocacaoSchema = require('./schemas/LocacaoSchema');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    IdCliente: Number,
    Nome :  { 
        type: String, 
        required : [true, "Nome do cliente é obrigatória!"]
    },
    Endereco:  { 
        type: String, 
        required : [true, "Endereco do cliente é obrigatória!"]
    },
    Telefone:  { 
        type: Number, 
        required : [true, "Telefone do cliente é obrigatória!"]
    },
    Email:  { 
        type: String, 
        required : [true, "Email do cliente é obrigatória!"]
    },
    locacoes : [LocacaoSchema]

}, { 
    versionKey: false 
  });

ClienteSchema.pre('save', async function(next){
    //Busca o objeto com o maior id no banco e gera novo id
    const Model = mongoose.model('carro', ClienteSchema);
    const objMaxId = await Model.findOne().sort({'IdCliente': -1});
    this.IdCliente = objMaxId == null ? 1 : objMaxId.IdCliente + 1;
    next();
  });

module.exports = mongoose.model('cliente', ClienteSchema);


// this.id_cliente = id_cliente;
// this.nome = nome;
// this.endereco = endereco;
// this.telefone = telefone;
// this.email = email;
// this.locacoes = [];