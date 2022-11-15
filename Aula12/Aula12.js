let varA = 'A' //B
let varB = 'B' //C
let varC = 'C' //A

let salva = varA
varA = varB
varB = varC
varC = salva

/**
 * varA = 'B'
 * varB = 'C'
 * varC = 'A'
 */


console.log(varA, varB, varC)


let variavelA = 'A'; //essa opção funciona apenas com o uso de ';' no final da declaração das variáveis
let variavelB = 'B';
let variavelC = 'C';

[variavelA, variavelB, variavelC] = [variavelB, variavelC, variavelA]
console.log(variavelA, variavelB, variavelC)