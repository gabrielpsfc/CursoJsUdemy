//Dobre os valores da array

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
let numeros1 = []
for( let item of numeros){
    numeros1.splice(numeros1.length, 0, (item*2))
}
console.log(numeros1)

const numerosEmDobro = numeros.map(function(valor, indice, array){
    console.log(valor, indice, array)
})

const numerosEmDobro1 = numeros.map(function(valor){
    return `${valor*50}`
})
console.log(numerosEmDobro1)