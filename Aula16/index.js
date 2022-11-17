

//                 0        1       2  
const alunos = ['Luiz', 'Maria', 'João']

console.log(alunos)
console.log(alunos[0])

alunos[0] ='Eduardo'

console.log(alunos)
alunos[3] = 'Luiza'
console.log(alunos)

console.log(alunos.length)
alunos[alunos.length] = 'Fabio'
alunos[alunos.length] = 'Luana'


alunos.push('Gabriel', 'Eliane') // adiciona itens no final da array
console.log(alunos)

alunos.unshift('Diego')
console.log(alunos)
console.log(alunos[0])
alunos.unshift('Rafael', 'Ana', 'Beatriz') //Adiciona itens no inicio da array
console.log(alunos)
console.log(alunos[0])
const removido = alunos.pop() // remove ultimo item da array e pode salvar em variável
console.log(removido)
console.log(alunos)
const left = alunos.shift() // remove primeiro item da array e pode salvar em variável
console.log(left)
console.log(alunos)
//delete alunos [4] // Deleta itens de uma array. Retorna undefined
//console.log(alunos)
console.log(alunos[50]) // JS retorna undefined 
console.log(alunos.slice(2,6))
console.log(alunos.slice(5,-2))//( a partir, até)
console.log(typeof alunos)
console.log(alunos instanceof Array) // texta objeto como sendo uma array
alunos.push(3)



