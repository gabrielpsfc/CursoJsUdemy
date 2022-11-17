/*function saudação(nome){
    console.log(`Bom dia! ${nome}`) // exibe se chamada
    return `Bom dia! ${nome}` // retorna quando salva em uma variável
}*/


function saudação(nome){
    return `Bom dia! ${nome}` // exibe se chamada
    
}

saudação('Luiz')
saudação('Maria')
saudação('Felipe')

const variável = saudação('Gabriel')
console.log(variável)


function soma(x=0, y=0){ // não se acessa as variáveis dentro do escopo da função fora dela
    const resultado = x + y
    return resultado // não é lido nada abaixo de return
    console.log(resultado)
}

console.log(soma(2, 2))
console.log(soma(3, 1))
console.log(soma(5, 10))
console.log(soma())
console.log(soma('Gabriel', ' Pereira'))

const raiz = function (n){   // Função anônima
    return n ** (1/2)

}; // é necessário o uso do ';'

console.log(raiz(9))
console.log(raiz(15).toFixed(2))
console.log(raiz(1024))

// Arrow function
const raizquadrada = n => n**(1/2)
/**
 * const raizquadrada = function (n) {
 *     return n ** (1/2)
 * };
 */

console.log(raizquadrada(25))