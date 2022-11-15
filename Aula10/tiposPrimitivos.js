
// tipos primitivos, string, number, undefined(variável não iniciada, não há valor declarado), null(não aponta para lugar nenhum na memória), boolean, symbol
const nome = 'luiz' //String
const num = 10 //number
const num1 = 10.52 //number
let nomeAluno //undefinet -> n apontam para lugar nenhum na memória
let sobrenomeAluno = null // Nulo -> não aponta para local algum da memória
// null != undefined
// null é configurado pelo programador por 
// a propria linguagem cria undefined
const boolean = false
//const bollean = true || false (valor lógico)
console.log(typeof nomeAluno, nomeAluno)
console.log(typeof sobrenomeAluno, sobrenomeAluno)
console.log(typeof boolean, boolean)

/**
 * dado primitivo / dado por referência()
 */

const ac = [1,2]
const bc = ac

console.log(ac,bc)

bc.push(3)

console.log(ac,bc)
//dado passado por refencia, tando a quanto b apontam para o mesmo local na memoria 

let a = 2
let b = a
console.log(a, b)
a = 3
console.log(a, b)
// dado primitivo, cada variável tem seu lugar na memoria
