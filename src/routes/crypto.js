var express = require("express");
var router = express.Router();

var cryptoController = require("../controllers/cryptoController");

router.post("/", function (req, res) {
    cryptoController.cadastrar(req, res);
});

router.get("/moedas", function (req, res) {
    cryptoController.listarMoedas(req, res);
});

router.get("/:fk_crypto", function (req, res) {
    cryptoController.listar(req, res);
});


module.exports = router;