/*const trezHoras = 60 * 60 * 3 * 1000 // 1 hora em  milisegundo
const umdia = 60* 60 * 24 *1000 // 1 dia em milisegundos
const data = new Date(0 + trezHoras + umdia);
console.log(data.toString())*/

//const data = new Date(2019, 3, 20, 15, 14, 27, 500) //(ano, mes, dia, hora, minuto, segundo, milesimos de segundo)
//Não se pode omitir o mês em Date, nesse caso, o valor fornecido será convertido para MS

const data = new Date('2019-04-20 20:20:59.100')
console.log(data)
console.log('2019-04-20 20:20:59 ')
console.log('Dia', data.getDate())
console.log('MÊs', data.getMonth()) // start from 0
console.log('Ano', data.getFullYear())
console.log('Hora', data.getHours())
console.log('Min', data.getMinutes())
console.log('Seg', data.getSeconds())
console.log('ms', data.getMilliseconds())
console.log('Dia semana', data.getDay()) // 0 - sunday, 6 - Saturday
console.log(data.toString());

console.log(Date.now())
//console.log(new Date(Date.now()))

function zeroEsquerda (num){
    return num >= 10 ? num : `0${num}`
}



function formataData(data){
    const dia = zeroEsquerda(data.getDate())
    const mes = zeroEsquerda(data.getMonth() + 1)
    const ano = zeroEsquerda(data.getFullYear())
    const hora = zeroEsquerda(data.getHours())
    const minutos = zeroEsquerda(data.getMinutes())
    const segundos = zeroEsquerda(data.getSeconds())
    const Msegundos = (data.getMilliseconds())
    return ` ${dia} / ${mes} / ${ano} ${hora} : ${minutos} : ${segundos} : ${Msegundos}`
}
const dataFuncao = new Date()
const dataBrasil = formataData(dataFuncao)
console.log(dataBrasil)

