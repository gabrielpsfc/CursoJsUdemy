const array =[1,2,3]

array.push(4)
array[0] = 'Luiz'
//console.log(array)
// Não se usa operador de atribuição em uma constante, para tando, use let

/**const nome01 = 'Luiz'
const sobrenome01 = 'Miranda'
const idade01 = 25

const nome02 = 'Maria'
const sobrenome02 ='Oliveira'
const idade02 = 55*/

/*const pessoa1 = {
    nome: 'Luiz',
    Sobrenome: 'Miranda',
    idade: 25
}

const pessoa2 = {
    nome: 'Maria',
    sobrenome: 'Oliveira',
    idade:55
}*/

//console.log(pessoa1.nome)

/*function criaPessoa (nome, sobrenome, idade){ // função factory. Função que retorna objetos
    return{
        nome: nome,
        sobrenome: sobrenome,
        idade: idade
    }
}*/
function criaPessoa (nome, sobrenome, idade){ // função factory. Função que retorna objetos
    return{
        nome,
        sobrenome,
        idade
    }
}
const pessoa1 = criaPessoa('Luiz', 'Miranda', 25)
const pessoa2 = criaPessoa('Maria', 'Oliveira', 32)
const pessoa3 = criaPessoa('João', 'Moreira', 55)
const pessoa4 = criaPessoa('Junior', 'Lara', 44)
const pessoa5 = criaPessoa('Jean', 'Otavio', 69)
console.log(pessoa1, pessoa2, pessoa3, pessoa4, pessoa5)
console.log(pessoa2.sobrenome)

const pessoa11 = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 25,

    fala (){
        console.log(`O nome é ${pessoa11.nome}, o sobrenome é ${pessoa11.sobrenome} e a idade é ${pessoa11.idade}`)
    },
    falaThis(){
        console.log(`${this.nome}  ${this.sobrenome} está falando oi`)

    },
    incrementaIdade(){
        ++this.idade
    }
}

console.log(pessoa11)
pessoa11.fala()
pessoa11.falaThis()
pessoa11.incrementaIdade()
pessoa11.fala()
pessoa11.incrementaIdade()
pessoa11.fala()
pessoa11.incrementaIdade()
pessoa11.fala()
pessoa11.incrementaIdade()
pessoa11.fala()

