/**
 * Aritiméticos 
 * + (Adição / Concatenação)
 * * (Multiplicação)
 * - (subtração)
 * ** (potencialização)
 * / (divisão)
 * % (resto de divisão) 
 */

const num1 = 2
const num2 = 10
const num4 = 3
const num3 = '5'
console.log(num1 + num2)
console.log(num1 + num3)
console.log(num1 - num2)
console.log(num1 ** num2)
console.log(num2 % num4)

/** Precedência dos operadores aritiméticos
 * 1° ()
 * 2° **
 * 3° *, /, %
 * 4° + -
 */

let contador = 1
contador++// 2
contador++// 3
contador++// 4
contador++// 5
let contadorpos =1
console.log(contadorpos++)
console.log(contadorpos)
let contadorant = 1
console.log(++contadorant)
console.log(contadorant)
// mesmo se aplica a subtração

let passo = 2
let contadorp = 0
contadorp +=passo // contador = contador+ 50
contadorp +=passo
contadorp +=passo
console.log(contadorp)


let n1 = 10
let n2 ='Algo'
let v = n1 * n2
console.log(typeof v) // ?
console.log(n1 * n2) //Não é um número
let n3 = '5'
console.log(n3*n1)
// parseInt(inteiro), parseFloat(real), Number(real/inteiro)
let str = '20.8'
let Num = 10
console.log(Number(str) * Num)




