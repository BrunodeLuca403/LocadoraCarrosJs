const mongoose = require('mongoose');
const LocacaoSchema = require('./schemas/LocacaoSchema');
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