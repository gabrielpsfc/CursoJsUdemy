const data = new Date()

function gerarHora(){
    let dia = data.getDate()
    let mes = data.getMonth() 
    let ano = data.getFullYear()
    let hora = data.getHours()
    let minutos = data.getMinutes()
    let diaSemana = data.getDay()
    let diaSemanaTexto = ''
    let mesTexto = ''
    switch (diaSemana) {
        
        case 0:
            diaSemanaTexto = 'Domigo';
            break
        case 1:
            diaSemanaTexto = 'Segunda';
            break
        case 2:
            diaSemanaTexto = 'Terça';
            break
        case 3:
            diaSemanaTexto = 'Quarda';
            break
        case 4:
            diaSemanaTexto = 'Quinta';
            break
        case 5:
            diaSemanaTexto = 'Sexta';
            break
        case 6:
            diaSemanaTexto = 'Sabado';
            break
        default:
            diaSemanaTexto =''
            break
    }

    switch (mes){

        case 0: 
            mesTexto = 'Janeiro'
            break
        case 1:
            mesTexto = 'Fevereiro'
            break
        case 2:
            mesTexto = 'Março'
            break
        case 3:
            mesTexto = 'Abril'
            break
        case 4:
            mesTexto = 'Maio'
            break
        case 5:
            mesTexto = 'Junho'
            break
        case 6:
            mesTexto = 'Julho'
            break
        case 7:
            mesTexto = 'Agosto'
            break
        case 8:
            mesTexto = 'Setembro'
            break
        case 9:
            mesTexto = 'Outubro'
            break
        case 10:
            mesTexto = 'Novembro'
            break
        case 11:
            mesTexto = 'Dezembro'
            break
        default:
            mesTexto = ''
            break

    }
    let paragrafo = document.querySelector('p')
    paragrafo.innerHTML = `${diaSemanaTexto}, ${dia} de ${mesTexto} de ${ano}, ${hora}:${minutos}`
    

}


/**
 * const data = new Date('2019-04-20 20:20:59.100')
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


switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domigo';
        return diaSemanaTexto
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto
    case 3:
        diaSemanaTexto = 'Quarda';
        return diaSemanaTexto
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto
    case 6:
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto
    default:
        diaSemanaTexto =''
        return diaSemanaTexto
}


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


 */