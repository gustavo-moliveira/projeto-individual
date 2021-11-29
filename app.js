process.env.AMBIENTE_PROCESSO = "desenvolvimento";
// process.env.AMBIENTE_PROCESSO = "producao";

var express = require("express");
var cors = require("cors");
var path = require("path");
var fetch = require("node-fetch")
var PORTA = 3333;
var crypto = require("./src/models/cryptoModel")

var app = express();

var indexRouter = require("./src/routes/index");
var usuarioRouter = require("./src/routes/usuarios");
var cryptoRouter = require("./src/routes/crypto")

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use(cors());

app.use("/", indexRouter);
app.use("/usuarios", usuarioRouter);
app.use("/crypto", cryptoRouter);

setInterval(() => {
    
    fetch(`https://www.mercadobitcoin.net/api/BTC/ticker/`, {cache: 'no-store',  }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
    
                 crypto.cadastrar(
                    novoRegistro.ticker.last,
                    new Date(),
                    1
                )
                
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })

}, 10000);

setInterval(() => {
    
    fetch(`https://www.mercadobitcoin.net/api/ETH/ticker/`, {cache: 'no-store',  }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
    
                 crypto.cadastrar(
                    novoRegistro.ticker.last,
                    new Date(),
                    2
                )
                
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })

}, 10000);

setInterval(() => {
    
    fetch(`https://www.mercadobitcoin.net/api/LTC/ticker/`, {cache: 'no-store',  }).then(function (response) {
        if (response.ok) {
            response.json().then(function (novoRegistro) {
    
                 crypto.cadastrar(
                    novoRegistro.ticker.last,
                    new Date(),
                    3
                )
                
            });
        } else {
            console.error('Nenhum dado encontrado ou erro na API');
        }
    })

}, 10000);

app.listen(PORTA, function () {
    console.log(`Servidor do site está rodando rodando: http://localhost:${PORTA} \n
    Você está rodando sua aplicação em ${process.env.AMBIENTE_PROCESSO} \n
    \t\tSe "desenvolvimento", banco local (MySQL Workbench). \n
    \t\tSe "producao", banco remoto (SQL Server em nuvem Azure)`);
});