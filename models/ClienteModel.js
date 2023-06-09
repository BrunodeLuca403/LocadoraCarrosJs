const mongoose = require('mongoose');
const LocacaoSchema = require('./schemas/LocacaoSchema');
const Schema = mongoose.Schema;

const ClienteSchema = new Schema({
    _id: { type: Number, required: true, default: -1 },
    Nome :  { 
        type: String, 
    },
    Endereco:  { 
        type: String, 
    },
    Telefone:  { 
        type: Number, 
    },
    Email:  { 
        type: String, 
    },
    locacoes : [LocacaoSchema]

}, { 
    versionKey: false 
  });

ClienteSchema.pre('save', async function(next){
    if (this._id < 1){
        const Model = mongoose.model('cliente', ClienteSchema);
        const objMaxId = await Model.findOne().sort({'_id': -1});
        this._id = objMaxId == null ? 1 : objMaxId._id + 1;
        next();
    }
  });

module.exports = {
    ClienteSchema: ClienteSchema,
    ClienteModel: mongoose.model('cliente', ClienteSchema)
  }
