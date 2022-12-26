// filter -> sempre retora array <= array filtrada

// retonro os números maiores de 10
const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]


function numeros10(ar) {
    let lista10 = []
    for (let item of ar) {
        if (item > 10) {
            lista10.splice(lista10.length, 0, item)
        }
    }
    return lista10
}
let array = numeros10(numeros)
console.log(array)

function callbackFilter(valor,/**  indice, arrayCompleto*/) {
    return valor > 10
    /**    if (valor > 10){
            return true
        }else{
            return false
        }*/
}
const numerosFilter = numeros.filter(callbackFilter)
console.log(numerosFilter)

const numerosFilter1 = numeros.filter(function (valor) {
    return valor > 10
})
console.log((numerosFilter1))

const numerosFilter2 = numeros.filter((valor) => { return valor > 10 })
console.log(numerosFilter2)
const numerosFilter3 = numeros.filter(valor => valor > 10)
// um único parametro não necessita (), um unico retorno não necessita de {} e do comando return
console.log(numerosFilter3)
const numerosFilter4 = numeros.filter((valor, indice, array) => {
    console.log(valor, indice, array)
    return valor > 10
})
console.log(numerosFilter4)





// Retorne as pessoas que tem o nome 5 letras ou mais
// Retorne as pessoas com mais de 50 anos
// Retorne as pessoas cujo nome termina com a
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 19 },
    { nome: 'Rosana', idade: 32 },
    { nome: 'Wallace', idade: 47 },
]
const pessoasComNomeGrande = pessoas.filter(function (valor,) {
    console.log(valor.nome)
    if (valor.nome.length >= 5) {
        return true
    } else {
        return false
    }
})
console.log(pessoasComNomeGrande)

const pessoasComNomeGrande1 = pessoas.filter(function (obj) {
    return obj.nome.length >= 5
})
console.log(pessoasComNomeGrande1)

const pessoasComNomeGrande2 = pessoas.filter(obj => obj.nome.length >= 5)
console.log(pessoasComNomeGrande2)
const pessoasComMaisDe50Anos = pessoas.filter(obj => obj.idade > 50)
console.log(pessoasComMaisDe50Anos)
console.log(pessoas[1].nome.substring(pessoas[1].nome.length - 1))

function a(valor, indice, array) {
    if (valor.nome.substring(valor.nome.length - 1) === 'a') {
        return true
    } else {
        return false
    }
}

const ultimaLetraA = pessoas.filter(a)
console.log(ultimaLetraA)
const ultimaLetraA1 = pessoas.filter(obj => obj.nome.substring(obj.nome.length - 1) === 'a')
console.log(ultimaLetraA1)


const ultimaLetraA2 = pessoas.filter(function (obj) {
    return obj.nome.toLocaleLowerCase().endsWith('a')
})
console.log(ultimaLetraA2)
const ultimaLetraA3 = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith('a'))
console.log(ultimaLetraA3)


const maparray = numeros.map(function (valor) {
    let vari = `valor * 2 = ${(valor * 2)}`
    return vari
})

console.log(maparray)

const maparrayfilter = maparray.map(valor => {
    let vari = valor.substring(12,)
    return vari / 2
})
console.log(maparrayfilter)

const maparrayfilter2 = numeros.map(function (valor, indice, array) {
    let vari = valor * indice
    return numeros.concat(vari)
})

console.log(maparrayfilter2)





const idades = pessoas.map(function (obj) {
    return ({ idade: obj.idade })
})

console.log(idades)
console.log(idades[0].idade)
const idades1 = pessoas.map(obj => ({ idade: obj.idade }))
console.log(idades1)

const comIds = pessoas.map(function (valor, indice, array) {
    //item  key             value
    valor.identificador = indice
    return valor
})

const comIdsNovo =  pessoas.map (function(valor, indice, array){
    const comIdsNovo = {...valor}
    comIdsNovo.id = indice
    return comIdsNovo
})
console.log(comIds)
console.log(pessoas)
console.log(comIdsNovo)