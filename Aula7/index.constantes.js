
// Não podemos criar constantes com palavras reservadas
// constantes precisam ter nomes significativos
// constantes não podem começar com um número, ex var 1nome = 'we'
// constantes não podem conter espaços ou traços (utilizamos camelCase (usamos letra maiuscula entre signos diferentes no nome da variável))
// Não podemos redeclarar variáveis com let
// constantes não podem ser modificadas
// Não utilize var/let, utilize const

const nome = 'Fábio'
const primeiroNumero = 5 
const segundoNumero = 10
const conta = primeiroNumero * segundoNumero
const resultadoDuplicado = conta * 2
let resultadoTriplicado = conta * 3
resultadoTriplicado = resultadoTriplicado +5
console.log(conta)
console.log(resultadoDuplicado)
console.log(resultadoTriplicado)

if(typeof(primeiroNumero) === 'number'){
    console.log('funcionou')
}else{
    console.log('nfuncionou')
}
