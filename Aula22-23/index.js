/**
 * Operadores Lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO
 */

console.log(true && true);
console.log(true && true && true);
console.log(true && false && true);
console.log( false || true)
console.log(false || false)
// Curto circuito

console.log('Luiz Otávio' && 0 && 'Maria') // retorna 0
console.log('Luiz Otávio' && true && 'Maria') // retorna a ultima variável
console.log('Luiz Otávio' && true && NaN) // retorna a ultima variável falsa
//em Js tudo pode ser avaliado em true ou false
//FALSY (0, '' (STRING VAZIA), null, undefine, NaN) valores que avaliam falso em JS,
// qualquer variável != false || FALSY === true 
console.log('Luiz' && 'Maria') // retorna o valor da ultima variável
console.log('Luiz' && '' && 'Algo') // retorna a primeira variável FALSY || falsa
console.log('Luiz' && NaN &&  'Algo') // retorna a primeira variável FALSY || falsa

function falaOi (){
    return 'Olá, mundo'
}

let exec = 0

console.log(exec && falaOi())


console.log(0 || false || null || 'Luiz Otávio' || true) // retorna o primeiro valor verdadeiro

const corUsuário = false
const corPadrap = corUsuário || 'preto'
console.log(corPadrap)

var a = 0
var b = null
var c = 'false' // string valor verdadeiro
var d = false
var e = NaN

console.log(a || b || c || d || e)


var a = 0
var b = null
var c = false // string valor verdadeiro
var d = false
var e = NaN

console.log(a || b || c || d || e) // retorna o ultimo valor quando não há valores verdadeiros
console.log(a || b || 'Algo' || c || d || e)

