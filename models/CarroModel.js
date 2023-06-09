const mongoose = require('mongoose');
const LocacaoSchema = require('./schemas/LocacaoSchema');
const Schema = mongoose.Schema;

const CarroSchema = new Schema({
    _id: { type: Number, required: true, default: -1 },
    Marca : { 
        type: String, 
        // required : [true, "Marca do veículo é obrigatória!"]
    },
    Modelo: { 
        type: String, 
        // required : [true, "Modelo do veículo é obrigatória!"]
    },
    Ano: { 
        type: Number, 
        // required : [true, "Ano do veículo é obrigatória!"]
    },
    Tipo: { 
        type: String, 
        // required : [true, "Tipo do veículo é obrigatória!"]
    },
    Cor: { 
        type: String, 
        // required : [true, "Cor do veículo é obrigatória!"]
    },
    Disponivel: { 
        type: String, 
        // required : [true, "Disponibilidade do veículo é obrigatória!"]
    },
    locacoes : [LocacaoSchema]

}, { 
    versionKey: false 
  });


  CarroSchema.pre('save', async function(next){
    //Busca o objeto com o maior id no banco e gera novo id
    if (this._id < 1){
        const Model = mongoose.model('carro', CarroSchema);
        const objMaxId = await Model.findOne().sort({'_id': -1});
        this._id = objMaxId == null ? 1 : objMaxId._id + 1;
        next();
    }
  });
  
module.exports = {
    CarroSchema: CarroSchema,
    CarroModel: mongoose.model('carro', CarroSchema)
  }

// this.id_carro = id_carro;
// this.marca = marca;
// this.modelo = modelo;
// this.ano = ano;
// this.tipo = tipo;
// this.cor = cor;
// this.disponivel = disponivel;
// this.locacoes = [];
