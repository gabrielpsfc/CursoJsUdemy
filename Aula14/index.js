//IEEE 754 - 2008

let num1 = 0.7 //number
let num2 = 0.1 //number



num1 += num2 //0.8
num1 += num2 //0.9
num1 += num2 //1.0
num1 += num2 //1.1
num1 += num2 //1.2
num1 += num2 //1.3
num1 += num2 //1.4
num1 += num2 //1.5
num1 += num2 //1.6
num1 += num2 //1.7
num1 += num2 //1.8
num1 += num2 //1.9
num1 += num2 //2.0

num1 = Number(num1.toFixed(2)) // corrige a imprecisão do JS


console.log(num1)
console.log(Number.isInteger(num1))



//----------------------------------------------------------------------------------------------//

let numero1 = 0.7
let numero2 = 0.1

numero1 = ((numero1 *100) + (numero2 * 100)) / 100
numero1 = ((numero1 *100) + (numero2 * 100)) / 100
numero1 = ((numero1 *100) + (numero2 * 100)) / 100


console.log(numero1)



// console.log(num1.toString() + num2) = 12.5
// num1 = num1.toString() converter para string
// console.log(num1.toString(2)) converter o numero para binário
// console.log(num1.toFixed(2)) determina n de casas decimais
// console.log(Number.isInteger(num1)) retorna true para n inteiro e false para n com . flutuante
//let temp = num1 * '5' isNAN(temp) retorna false nesse caso
//console.log(Number.isNaN(temp)) retorna true caso a conta retorne NaN e false em caso contrario
// Não faça contas com string

