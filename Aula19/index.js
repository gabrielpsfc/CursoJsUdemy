/**
 * Dados primitivos - string, number, boolean, undefined, null (digint, symbol) (valores imutáveis) (valores copiados)
 * let nome ='Luiz'
 * nome[0] = 'R' (linha inócua)
 * O valor de nome [0] não é alterado pois string é um tipo primitivo e por tanto imutável
 * Dados por referencia (mutável) - Arrays, Object, Function (passado por referência ao mesmo valor na memória)
 */

let a = 'A'
let b = a // cópia (b mantem seu valor a partir desse ponto, independente de alterações no valor de a. Característica do dado primitivo)

console.log(a, b)

a = 'OUTRA COISA'
console.log(a, b)

let aa = [1,2,3]
let bb = aa // não é cópia, bb aponta para o mesmo local na memória
console.log(aa, bb)
aa.push(4)
console.log(aa, bb)
bb.pop()
console.log(aa, bb)
// utilizando [...x] copia-se um objeto referencial para outro objeto referencial
let var1 = [1,2,3,4,5,6]
let var2 = [...var1]
console.log(var1, var2)
var1.push(7)
var2.pop()
console.log(var1, var2)
// [...x] vale para objetos
const pessoa = {
    a: 'Luiz',
    b: 'Otávil'
}

const pessoa1 = {...pessoa}
pessoa.a = 'Fernando'
pessoa1.b = 'Soares'
console.log(pessoa, pessoa1)