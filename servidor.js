require('./db/mongo');
const express = require('express');
const servidor = express();
const cors = require("cors");
servidor.use(express.json());
servidor.use(cors());



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

// const routes = require("./routes/Routes.js");
// servidor.use(routes);



servidor.listen(3020, function(){
    console.log('Servidor rodando na porta 3020...');
});

// const cors = require('cors');
// const corsOptions ={
//     origin:'http://localhost:3020', 
//     credentials:true,            //access-control-allow-credentials:true
//     optionSuccessStatus:200
// }
// app.use(cors(corsOptions));