const h1 = document.querySelector('.container h1');
const data = new Date();



function getDayWeek (diaSemana){
    let diasSemana =['domingo', 'segunda-feira', 'terça-feira', 'quarta-feira', 'quinta-feira', 'sexta-feira', 'sabado']
    return diasSemana[diaSemana]
    

}

function getNomeMes (NumeroMes){
    const meses = ['Janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho', 'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro']
    return meses[NumeroMes]
}

function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`
}

function criaData(data){
    const diaSemana = data.getDay()
    const numeroMes = data.getMonth()

    const nomeDia = getDayWeek(diaSemana)
    const nomeMes = getNomeMes(numeroMes)

    return (`${nomeDia}, ${data.getDate()} de ${nomeMes},  de ${data.getFullYear()} <br> ${zeroEsquerda(data.getHours())}:${zeroEsquerda(data.getMinutes())}`)

    }
h1.innerHTML = criaData(data)