function funcao( ){
    console.log(arguments)
}

funcao('valor',1,2,3,4,5,6,7,8,9,10)


// podemos informar argumentos sem parametros informados na declaração da função, usamos 'arguments' para selecionar os parametros informados em um objeto (ñ funciona para arrow function)
// argumetos que sustenta todos os armentos enviados
function funcao1( ){
    console.log(arguments[2])
}

funcao1('valor',1,2,3,4,5,6,7,8,9,10)


function funcao2 () {
    let total = 0
    for (let argumento of arguments){
        total+=argumento
    }
    console.log(total)
}

funcao2(1,2,3,4,5,6,7)
// mesmo informando parametros, podemos selecionar os argumentos informados com 'arguments'
// [a,b,c] === [arguments[0], arguments[1], arguments[2]]
function funcao3 (a,b,c){
    let total = 0
    for (let argumento of arguments){
        total+=argumento
    }
    console.log(total)
    console.log(a,b,c)
    console.log(arguments[0], arguments[1], arguments[2])
}
funcao3(1,2,3,4,5,6,7,8,9,10)

// os parametros são setados como undefined caso não sejam declarados
// podemos declarar - ou + argumentos que parametros sem retorno de erro

function funcao4 (a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f)
}

funcao4(1,2,3,4,5,6,7)
funcao4(1,2,3)

//

function funcao5 (a, b){
    console.log(a+b)

}

funcao5(5)


function funcao6 (a, b){
    b = b || 0
    console.log(a+b)

}

funcao6(5)


function funcao7 (a, b=2, c =4){
   
    console.log(a+b+c)

}

funcao7(2,10, 20)
funcao7(2,10, 20)
funcao7(2, '', 20)
funcao7(2, 0, 20)
funcao7(2, undefined, 20) // b=2 // apenas undefined retorna o valor setado no parametro


//Atribuição de parametros via desestruturação

function funcao8 ({nome, sobrenome, idade}){
    console.log(nome,sobrenome,idade)
}

funcao8({nome: 'Luiz', sobrenome: 'Otávio', idade: 20})
let obj = {nome: 'Luiz', sobrenome: 'Otávio', idade: 20}
funcao8(obj)


function funcao9 ([valor1,valor2,valor3]){
    console.log(valor1, valor2, valor3)

}


funcao9(['luiz', 'Miranda', 30])

//

function conta(operador, acumulador, numeros){
    console.log(operador, acumulador, numeros)    
}

conta('+', 0, [20,30,40,50])
// rest operator (o rest operator deve ser o ultimo parametro)

function conta1(operador, acumulador, ...numeros){
    for(let numero of numeros){
       if (operador === '+')acumulador += numero
       if (operador === '-')acumulador -= numero
       if (operador === '/')acumulador /= numero
       if (operador === '*')acumulador *= numero
    }
    console.log(acumulador)
}

conta1('+', 0, 20,30,40,50)
conta1('-', 0, 20,30,40,50)
conta1('-', 200, 20,30,40,50)
conta1('*', 50, 1,2,3,4,5,50)
conta1('+', 1, 20,30,40,50)

// mesmo com rest operator os parametros são retornados como objetos com keys independentes no caso de uso de 'arguments'
// não se usa arguments in arrow function

const contaConst = function conta(operador, acumulador, ...numeros) {
    for(let numero of numeros){
        if (operador === '+')acumulador += numero
        if (operador === '-')acumulador -= numero
        if (operador === '/')acumulador /= numero
        if (operador === '*')acumulador *= numero
     }
     console.log(acumulador)
     console.log(arguments)

};

contaConst('-', 1, 20,30,40,50)


//

const contaConst1 = (...args) => {
    console.log(args)
}
contaConst1('-', 1, 20,30,40,50)

















