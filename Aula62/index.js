const nomes = ['Eduardo', 'Maria', 'Joana']
console.log(nomes)
nomes[2] = 'Joao'
console.log(nomes)
delete nomes[2]
console.log(nomes)
// String, Objetos, Funções, Números
const nomes1 = new Array('Eduardo', 'Maria', 'Joana')
console.log(nomes1)
const novo = nomes//Array são valores por referencia, oque for feito em nomes sera refletido em novo e tudo feito em novo reflete em nomes
novo.pop()
console.log(nomes)
const novo1 = [...nomes1] // O array novo1 é um cópia independente do array novo1, oque for altera em um não altera o outro
console.log(novo1)
novo1.pop()
console.log(novo1)
console.log(nomes1)
//tamanho array (método)
console.log(nomes1.length)
const removido = nomes1.pop() // retira o ultimo elemento de uma array e pode salva-lo ou não em uma variável
console.log(nomes1)
console.log(removido)
// shift()
// Remove o primeiro item de um array, pode ou não salvar esse item em uma variável e desloca todos os itens para o indice anterior
const arrayNova = ['Eduardo', 'Maria', 'Joana', 'Joao']
const shiftRemovido = arrayNova.shift()
console.log(shiftRemovido)
console.log(arrayNova)
// push()
// Acrescenta novo item no final de uma array
arrayNova.push('Eliane')
arrayNova.push('Wallace')
console.log(arrayNova)
//unshift
//Acresceta novo item no começo de um array deslocanto os item originais para o indice posterior
arrayNova.unshift('Carlos')
arrayNova.unshift('Sabrina')
console.log(arrayNova)
// pop/push (final) shift e unshift (começo)
// slice()
const novonew = arrayNova.slice(1,3)
console.log(novonew)
const novonew1 = arrayNova.slice(1,-1)
console.log(novonew1)
//converter string em array
const nomedoprofessor = 'Luiz Otávio Miranda'
const nomeArray = nomedoprofessor.split(' ')
console.log(nomeArray)
//converter Array em string
const arraynomes = [ 'Carlos', 'Maria', 'Joana', 'Joao', 'Eliane' ]
const nomejoin = arraynomes.join(' ')
console.log(nomejoin)
