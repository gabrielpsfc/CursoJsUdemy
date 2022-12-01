const frutas = ['Pera', 'Maça', 'Uva'];
for ( let i = 0; i < frutas.length; i++) {
    console.log(frutas [i])
}
// for in lê os índices de array ou objetos
for (let indice in frutas){
    console.log(frutas[indice])
}

const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
    idade: 30
}
// iteração sobre as chaves de objetos
for (let keys in pessoa){
    console.log(keys)
}

console.log(pessoa.nome)
console.log(pessoa['nome'])

const chave = 'nome'
console.log(pessoa[chave])

for (let key in pessoa){
    console.log(key, pessoa[key])

}
//        0123456789
let it = '2022/02/11'
let dt =''
console.log(it.length)
for (let i in it){
    console.log(it[i])
}
function data (data){
    return `${data.substring(8,)}/${data.substring(5,7)}/${data.substring(0,4)}`
}

let substring = it.substring(0,4)
console.log(substring)
console.log(it)
console.log(data(it))