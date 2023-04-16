const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const LocacaoSchema = new Schema({
    IdLocacao: Number,
    //Carro : CarroModel,
    //Cliente: Cliente,
    DataInicio: { 
        type: Date, 
        required : [true, "Email do cliente é obrigatória!"]
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
    }
    //Pagamento: String
});

LocacaoSchema.pre('save', async function(next){
    //Busca o objeto com o maior id no banco e gera novo id
    const Model = mongoose.model('locacao', LocacaoSchema);
    const objMaxId = await Model.findOne().sort({'IdLocacao': -1});
    this.IdLocacao = objMaxId == null ? 1 : objMaxId.IdLocacao + 1;
    next();
  });


module.exports = mongoose.model('locacao', LocacaoSchema);


// this.id_locacao = id_locacao;
// this.carro = carro;
// this.cliente = cliente;
// this.data_inicio = data_inicio;
// this.data_fim = data_fim;
// this.km_inicial = km_inicial;
// this.km_final = km_final;
// this.valor_diaria = valor_diaria;
// this.valor_km_extra = valor_km_extra;
// this.valor_total = valor_total;
// this.pagamento = null;