// Declaração de função (Function Hoisting) as declarações de funções e variáveis declaradas com a palavra var para o top do JavaScript

function falaOi(){
    console.log('Oi')
}
falaOi()
// Firs-class objects () A função pode ser tratadas como dados
// Function expression (uma função pode ser usada como variável em outra função)
const souUmDado = function (){
    console.log('Sou um dado.')
}
function excutaFuncao(Funcao){
    console.log(`Vou executar sua função abaixo: ${Funcao}`)
    Funcao()
}
souUmDado()
excutaFuncao(souUmDado)
// Arrow function

const funcaoArrow = () => {
    console.log('Sou uma arrow function')
}
funcaoArrow()
// Todas a cima objetos de primeira classe

//Dentro de um objeto
const obj = {
    falar: function(){
        console.log('Falar')
    }
}


const obj1 = {
    falar(){
        console.log('Falar')
    }
}

obj.falar()
obj1.falar()




