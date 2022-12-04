/**
 * Escreva uma função que recebe um número e retorne o seguinte:
 * Número é divisível por 3 = Fizz
 * Número é divisível por 5 = Buzz
 * Número é divisível por 3 e 5 = FizzBuzz
 * Número Não é divisível por 3 e 5 = Retorna o próprío número
 * Checar se o número é realmente um número
 * Use a função com números de 0 a 100
 */

function Ex43(n){
    if (typeof(n) === 'number'){
    if (n % 3 === 0 && n % 5 ===0) return 'FizzBuzz'
    if (n % 3 === 0) return 'Fizz'
    if (n % 5 === 0) return 'Buzz'
    else return n}
    else return n


}

listaFizz = []
listaBuzz = []
listaFizzBuz = []

console.log(Ex43('try'))

for (let i = 0; i <= 100; i++){
    console.log(i, Ex43(i))
    if (Ex43(i) === 'Fizz') listaFizz.push(i)
    if (Ex43(i) === 'Buzz') listaBuzz.push(i)
    if (Ex43(i) === 'FizzBuzz') listaFizzBuz.push(i)

}

console.log(listaBuzz)
console.log(listaFizz)
console.log(listaFizzBuz)
console.log(listaBuzz.length)
console.log(listaFizz.length)
console.log(listaFizzBuz.length)


