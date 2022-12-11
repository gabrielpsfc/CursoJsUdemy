// return
// Retorna um valor e Termina a função
//!return, função não retorna valor


function soma(a,b){
    return a + b
}

s1 = soma(2,5)
console.log(s1)

function soma2(a,b){
    console.log(a + b)
}

soma2(2,5)


//document.addEventListener('click', function(){
//    document.body.style.backgroundColor = 'red'
//})




function criaPessoa (nome, sobrenome){
    return {
        nome,
        sobrenome
    }
}

const p1 = criaPessoa('Luiz', 'Otávio')
const p2 = {
    nome: 'João',
    sobrenome: 'Oliveira'
}

console.log(p1, p2)

console.log(typeof p1, typeof p2)
// enclosure
function falaFrase(comeco){
    function falaResto(resto){
        return comeco + ' ' + resto
    }

    return falaResto
}

const variavel = falaFrase('Olá')
const variavel1 = 1
console.log(variavel)
console.log(typeof variavel)
console.log(variavel())
console.log(variavel('mundo'))

function duplica (n){
    return n*2
}

function triplica (n){
    return n*3
}

function quadriplica (n){
    return n*4
}

console.log(duplica(2))
console.log(triplica(2))
console.log(quadriplica(2))


function criaMultiplicador(multiplicador){
    //multiplicador
    function multiplicação(n){
        n*multiplicador
    }

    return multiplicação

}

function criaMultiplicador1(multiplicador){
    return function(n){
        return n* multiplicador
    }

}

const duplica1 = criaMultiplicador1(2)
const triplica1 = criaMultiplicador1(3)
const quadriplica1 = criaMultiplicador1(4)

console.log(duplica1)
console.log(triplica1)
console.log(quadriplica1)
console.log(duplica1(2))
console.log(triplica1(2))
console.log(quadriplica1(2))
