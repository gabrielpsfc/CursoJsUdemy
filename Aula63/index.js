
//                -5      -4       -3         -2        -1
//                0        1        2          3         4
const nomes = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']
const nomes1 = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']
const nomes2 = ['Maria', 'Joao', 'Eduardo', 'Gabriel', 'Julia']
// splice altera a função original
//nome.splice(('Indice aonde se inicia a alteração'), (Quantos elementes a serem removidos), Elementos1, elemento2,  )
//nomes.splice(indice, delete,  elemento1, elemento2, elemento3 )
//pop
// remove ultimo item de array e pode salva-lo como array em outra variável
const removidos = nomes.splice(4, 1)
// da esquerta para direito, removendo inicialmente o indece 4, gostaria de remover 1 elemento
console.log(nomes, removidos)
const removido1 = nomes.splice(2, 2)
//salva o elemento removido na array removido
console.log(nomes, removido1, removidos)
// selecionar até o ultimo item de array
// O remove é sempre da esquerda para a direita
const removidosnomes1 = nomes1.slice(-3, Number.MAX_VALUE)
console.log(nomes1)
console.log(removidosnomes1)
console.log(Number.MAX_VALUE)
// Add com slice()
console.log(nomes2)
nomes2.splice(3, 0 , 'Luiz')
// Será add no indice 3, itens posteriores serão inceridos e indices posteriores, nada será removido, item 'Luiz' será o nome intem no indice 3
console.log(nomes2)
// Será removido o atual item no indice 3, será acrescentado no lugar o item 'Carlos', demais posições são mantidas, item 3 original é saldo em removidos 3 
const removidos3 = nomes2.splice(3, 1, 'Carlos')
console.log(nomes2, removidos3)
//São removidos os itens nos indicices 4 e 5, os itens removidos são salvos em removidos4, os itens 'Ingrid' e 'Fernando' são add nessa ordem do indice 4 em diante
const removidos4 = nomes2.splice(4, 2, 'Ingrid', 'Fernando')
console.log(nomes2, removidos4)
// splice(-1, 1) = pop
nomes2.splice(-1,1)
console.log(nomes2)
// splice(0, 1) = shift
nomes2.splice(0,1)
console.log(nomes2)
// splice(nomes.lenght, 0, 'Elemento') = push('Elemento)
nomes2.splice(nomes2.length, 0, 'Elemento')
console.log(nomes2)
// splice(0, 0 , 'Elemento') = unshift('Elemento')
nomes2.splice(0,0,'Elemento')
console.log(nomes2)

