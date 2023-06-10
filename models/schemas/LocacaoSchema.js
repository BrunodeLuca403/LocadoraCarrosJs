const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocacaoSchema = new Schema({
    _id: { type: Number, required: true, default: -1 },
    DataInicio: { 
        type: Date, default: Date.now
    },
    DataFim: { 
        type: String, 
    },
    KmInicial: { 
        type: Number,
    },
    KmFinal: { 
        type: Number, 
    },
    ValorDiaria: { 
        type: Number, 
    },
    ValorkMExtra: { 
        type: Number, 
    },
    ValorTotal: { 
        type: Number, 
    },

    clientes: { 
        type: String, 
        ref: 'cliente' 
    },
    carros: { 
        type: String, 
        ref: 'carro' 
    },

    pagamentos: { String,
        ref: 'pagamento'
    }
    //Pagamento: String
}, { 
    versionKey: false 
  });

LocacaoSchema.pre('save', async function(next){
    if (this._id < 1){
        const Model = mongoose.model('locacao', LocacaoSchema);
        const objMaxId = await Model.findOne().sort({'_id': -1});
        this._id = objMaxId == null ? 1 : objMaxId._id + 1;
        next();
    }
  });


module.exports = LocacaoSchema;