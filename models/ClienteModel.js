const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    IdCliente: Number,
    Nome : String,
    Endereco: String,
    Telefone: Number,
    Email: String,

});

module.exports = mongoose.model('cliente', ClienteSchema);


// this.id_cliente = id_cliente;
// this.nome = nome;
// this.endereco = endereco;
// this.telefone = telefone;
// this.email = email;
// this.locacoes = [];