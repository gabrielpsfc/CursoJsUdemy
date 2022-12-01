
const nome = 'Luiz Otávio'
const nomes = ['Luiz', 'Otávio', 'Henrique']
console.log('#############################################')
console.log('Classico')
for ( let i = 0; i < nome.length; i++) {
    console.log(nome[i])
}
console.log('#############################################')
console.log('For in')
for (let i in nome) {
    console.log(nome[i])
}
console.log('#############################################')
console.log('For Of')
for (let valor of nome){
    console.log(valor)
}
console.log('#############################################')
console.log('Classico')
for ( let i = 0; i < nomes.length; i++) {
    console.log(nomes[i])
}
console.log('#############################################')
console.log('For in, retorna indice')
for (let i in nomes) {
    console.log(nomes[i])
}
console.log('#############################################')
console.log('For Of, retorna valor do indice')
for (let valor of nomes){
    console.log(valor)
}
console.log('#############################################')
console.log('For Each,')

nomes.forEach(function (elemento, indice, array) {
    console.log(elemento, indice, array)
})

console.log('#############################################')

const pessoa = {
    nome:'Luiz',
    sobrenome: 'Otávio'
};

for (let key in pessoa) {
    console.log(key, pessoa[key])
}


// for Clássico - Geralmente com iteráveis (Array ou strings)
// for in - Retorna o índice/chave (string, array ou objetos)
// for of - Retorna o valor em si (iteráveis, arrays ou strings)