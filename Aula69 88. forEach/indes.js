const a1 = [ 5,10,15]
const a2 = a1.map(valor => valor*2)

for (let valor of a2){
    console.log(valor)
}
console.log('111111111111111111111111111111111111111111111111111111111111111')
for (let indice in a2){
    console.log(indice)
}
console.log('111111111111111111111111111111111111111111111111111111111111111')
for (let cont = 0; cont < a2.length; cont++){
    console.log(cont, a2[cont])
}
console.log('111111111111111111111111111111111111111111111111111111111111111')
a2.forEach(function(valor, indice, array){
    console.log(valor, indice)
})
console.log('111111111111111111111111111111111111111111111111111111111111111')
let total = 0
a2.forEach(function(valor, i, a){
    total += valor
    return total
})
console.log(total)
