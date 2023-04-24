const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocacaoSchema = new Schema({
    IdLocacao: Number,
    //Carro : CarroModel,
    //Cliente: Cliente,
    DataInicio: { 
        type: Date, default: Date.now
    },
    DataFim: { 
        type: Date, 
        required : [true, "Data fim  é obrigatória!"]
    },
    KmInicial: { 
        type: Number,
        required : [true, "Km inicial é obrigatória!"]
    },
    KmFinal: { 
        type: Number, 
        required : [true, "Km Final é obrigatória!"]
    },
    ValorDiaria: { 
        type: Number, 
        required : [true, "Valor diária é obrigatória!"]
    },
    ValorkMExtra: { 
        type: Number, 
        required : [true, "Valor km extra do cliente é obrigatória!"]
    },
    ValorTotal: { 
        type: Number, 
        required : [true, "Valor total é obrigatória!"]
    },

    cliente:{type: mongoose.Types.ObjectId, 
        ref: 'cliente'
    },

    carro: { type: mongoose.Types.ObjectId,
        ref: 'carro'
    },

    pagamento: { type: mongoose.Types.ObjectId,
        ref: 'pagamento'
    }
    //Pagamento: String
}, { 
    versionKey: false 
  });

LocacaoSchema.pre('save', async function(next){
    //Busca o objeto com o maior id no banco e gera novo id
    const Model = mongoose.model('locacao', LocacaoSchema);
    const objMaxId = await Model.findOne().sort({'IdLocacao': -1});
    this.IdLocacao = objMaxId == null ? 1 : objMaxId.IdLocacao + 1;
    next();
  });


module.exports = LocacaoSchema;