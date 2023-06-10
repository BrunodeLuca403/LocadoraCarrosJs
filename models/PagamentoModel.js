const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PagamentoSchema = new Schema({
    _id: { type: Number, required: true, default: -1 },
   // Locacao : String,
    TipoPagamento: { 
        type: String, 
    },
    ValorPago: { 
        type: Number, 
    },

    locacao: { type: mongoose.Types.ObjectId,
        ref: 'locacao'
    }
});

PagamentoSchema.pre('save', async function(next){
    if (this._id < 1){
        const Model = mongoose.model('pagamento', PagamentoSchema);
        const objMaxId = await Model.findOne().sort({'_id': -1});
        this._id = objMaxId == null ? 1 : objMaxId._id + 1;
        next();
    }
  });

module.exports = {
    PagamentoSchema: PagamentoSchema,
    PagamentoModel: mongoose.model('pagamento', PagamentoSchema)
  }

// this.id_pagamento = id_pagamento;
// this.locacao = locacao;
// this.tipo_pagamento = tipo_pagamento;
// this.valor_pago = valor_pago;