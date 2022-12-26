// Some todos os números (reduce)
// Retorne um array com os pares (Filter)
// Retorne um array com o dobro dos valores (Map)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const total = numeros.reduce(function(acumlador, valor, indice, array){
    acumlador += valor
    console.log(acumlador, valor)
    return acumlador
}, 0) // valor inicial do acumulador/ se o valor inicial do acumulador não for declarado, o valor inicial do acumulador é igual a array[0]
console.log(total)


const totalPares = numeros.reduce(function(acumulador, valor, indice, array){
    if (valor % 2 ===0) acumulador.push(valor)
    return acumulador
}, [])
console.log(totalPares)
const pares = numeros.filter(function(valor){
    if(valor % 2 ===0){
        return valor
    }
})
console.log(pares)
const dobro = numeros.reduce(function(contador, valor, indice, array){
    contador.push(valor*2)
    return contador 
},[])
console.log(dobro)
const dobroMap = numeros.map(valor => valor * 2)
console.log(dobroMap)
const somaAcumulador = numeros.reduce(function(acumlador, valor, indice, array){
    acumlador *= valor
    return acumlador
})
console.log(somaAcumulador)

const somaNumerosPares = numeros.reduce(function(acumulador, valor, indice, array){
    if(valor %2 ===0){   
    console.log(acumulador)     
    acumulador += valor
    console.log(acumulador)}
    return acumulador
},0)// se acumulador não for declarado 0, no primeiro laço, acumulador vai ser considerado 5

console.log(somaNumerosPares)
console.log(numeros)
console.log(50+80+2+8+22)
// Retorne a pessoa mais velha
const pessoas = [
    { nome: 'Luiz', idade: 62 },
    { nome: 'Maria', idade: 23 },
    { nome: 'Eduardo', idade: 55 },
    { nome: 'Letícia', idade: 10 },
    { nome: 'Rosana', idade: 64 },
    { nome: 'Wallace', idade: 63 },
]

const PmaisVelha = pessoas.reduce(function(contador, valor, indice, array){
    console.log(valor, contador)
    if(valor.idade > contador.idade){
        contador = valor
    }
    return contador
})

console.log(PmaisVelha)


