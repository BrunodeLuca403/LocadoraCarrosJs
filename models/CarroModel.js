const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CarroSchema = new Schema({
    IdCarro: Number,
    Marca : String,
    Modelo: String,
    Ano: Number,
    Tipo: String,
    Cor: String,
    Disponivel: String

});

module.exports = mongoose.model('carro', CarroSchema);

// this.id_carro = id_carro;
// this.marca = marca;
// this.modelo = modelo;
// this.ano = ano;
// this.tipo = tipo;
// this.cor = cor;
// this.disponivel = disponivel;
// this.locacoes = [];