//closure, habilidade da função em acessar seu escopo léxico

function retornaFuncao(){
    const nome = 'Luiz'
    return function () {
        return nome
    }
}

const funcao = retornaFuncao ()
// Três escopos (próprio, parent, global)
console.dir(funcao)
console.log(funcao())


function retornaFuncao1(nome){    
    return function () {
        return nome
    }
}

const funcao1 = retornaFuncao1 ('Luiz')
const funcao2 = retornaFuncao1 ('Otávio')
// Três escopos (próprio, parent, global)
console.dir(funcao1)
console.dir(funcao2)
console.log(funcao1(),funcao2())

