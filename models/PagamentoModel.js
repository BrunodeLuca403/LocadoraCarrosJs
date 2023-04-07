const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PagamentoSchema = new Schema({
    IdPagamento: Number,
    Locacao : String,
    TipoPagamento: String,
    ValorPago: Number,
});

module.exports = mongoose.model('pagamento', PagamentoSchema);



// this.id_pagamento = id_pagamento;
// this.locacao = locacao;
// this.tipo_pagamento = tipo_pagamento;
// this.valor_pago = valor_pago;