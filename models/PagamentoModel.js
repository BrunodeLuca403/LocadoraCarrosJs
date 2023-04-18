const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PagamentoSchema = new Schema({
    IdPagamento: Number,
   // Locacao : String,
    TipoPagamento: { 
        type: String, 
        required : [true, "Tipo pagamento é obrigatória!"]
    },
    ValorPago: { 
        type: Number, 
        required : [true, "Valor pago é obrigatória!"]
    },
});

PagamentoSchema.pre('save', async function(next){
    //Busca o objeto com o maior id no banco e gera novo id
    const Model = mongoose.model('locacao', PagamentoSchema);
    const objMaxId = await Model.findOne().sort({'IdPagamento': -1});
    this.IdPagamento = objMaxId == null ? 1 : objMaxId.IdPagamento + 1;
    next();
  });

module.exports = mongoose.model('pagamento', PagamentoSchema);

// this.id_pagamento = id_pagamento;
// this.locacao = locacao;
// this.tipo_pagamento = tipo_pagamento;
// this.valor_pago = valor_pago;