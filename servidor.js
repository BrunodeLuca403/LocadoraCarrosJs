require('./db/mongo');
const express = require('express');
const servidor = express();
servidor.use(express.json());

//Rotas
const CarroRouter = require('./routes/CarroRouter');
servidor.use('/carro', CarroRouter);

const ClienteRouter = require('./routes/ClienteRouter');
servidor.use('/cliente', ClienteRouter);

const LocacaoRouter = require('./routes/LocacaoRouter');
servidor.use('/locacao', LocacaoRouter);

const PagamentoRouter = require('./routes/PagamentoRouter');
servidor.use('/pagamento', PagamentoRouter);


servidor.get('/', function(req, res){    
    res.send('Servidor de APIs rodando...');
});

servidor.listen(3020, function(){
    console.log('Servidor rodando na porta 3020...');
});