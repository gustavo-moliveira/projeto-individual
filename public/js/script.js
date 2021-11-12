setInterval(() => {
    btc()
}, 1000);
function btc() {
fetch(`https://www.mercadobitcoin.net/api/BTC/ticker/`)
.then(function (resposta) {
  
    resposta.json()
    .then(function (json) {
        btc_valor1.innerHTML = json.ticker.last.slice(0,3)
        btc_valor2.innerHTML = json.ticker.last.slice(3,6)
    })
    .catch(function (error) {
        console.log(error);
    })
})
}

setInterval(() => {
    eth()
}, 1000);
function eth() {
fetch(`https://www.mercadobitcoin.net/api/ETH/ticker/`)
.then(function (resposta) {
  
    resposta.json()
    .then(function (json) {
        eth_valor1.innerHTML = json.ticker.last.slice(0,2)
        eth_valor2.innerHTML = json.ticker.last.slice(2,5)
    })
    .catch(function (error) {
        console.log(error);
    })
})
}

setInterval(() => {
    ltc()
}, 1000);
function ltc() {
fetch(`https://www.mercadobitcoin.net/api/LTC/ticker/`)
.then(function (resposta) {
  
    resposta.json()
    .then(function (json) {
        ltc_valor1.innerHTML = json.ticker.last.slice(0,1)
        ltc_valor2.innerHTML = json.ticker.last.slice(1,4)
    })
    .catch(function (error) {
        console.log(error);
    })
})
}