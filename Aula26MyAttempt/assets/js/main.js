let peso = Number(document.querySelector('input#peso').value)
let altura = Number(document.querySelector('input#altura').value)
let resposta = document.querySelector('div#resposta')

function calcular() {
    let peso = Number(document.querySelector('input#peso').value)
    let altura = Number(document.querySelector('input#altura').value)
    let resposta = document.querySelector('div#resposta')
    alert(`${peso} ${altura}`)
    let imc = peso / (altura ** 2)
    if (peso <= 0 || altura <= 0) {
        resposta.innerHTML = `Favor não informar Peso ou Altura negativa`
    }else if (imc < 18.5){
        resposta.innerHTML = `imc de ${imc.toFixed(2)} indica que você está Abaixo do peso`
    }else if (imc < 24.9){
        resposta.innerHTML = `imc de ${imc.toFixed(2)} indica que você está com Peso Normal`
    }else if (imc < 29,9) {
        resposta.innerHTML = `imc de ${imc.toFixed(2)} indica que você está com Sobrepeso`
    }else if (imc < 34,9 ){
        resposta.innerHTML = `imc de ${imc.toFixed(2)} indica que você está com Obesidade grau 1`
    }else if ( imc < 39,9){
        resposta.innerHTML = `imc de ${imc.toFixed(2)} indica que você está com Obesidade grau 2`
    }else {
        resposta.innerHTML = `imc de ${imc.toFixed(2)} indica que você está com Obesidade grau 3`
    }
}