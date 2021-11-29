var cryptoModel = require("../models/cryptoModel");

var sessoes = [];

function listar(req, res) {
    var fk_crypto = req.params.fk_crypto;
    console.log('CRYPTOOOOOOO',fk_crypto)

    cryptoModel.listar(fk_crypto)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function listarMoedas(req, res) {
    cryptoModel.listarMoedas()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function cadastrar(req, res) {
    var valor = req.body.valorServer;
    var dataHora = req.body.dataHoraServer;
    var fk_crypto = req.body.fk_cryptoServer;

    console.log('valor',valor)

    if (valor == undefined) {
        res.status(400).send("Seu valor está undefined!");
    } 
    else if (dataHora == undefined) {
        res.status(400).send("Sua dataHora está undefined!");
    } 
    else {
        
        cryptoModel.cadastrar(valor, dataHora, fk_crypto)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
    }
    
}

module.exports = {
    cadastrar,
    listar,
    listarMoedas
}