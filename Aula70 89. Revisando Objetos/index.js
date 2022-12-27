// literal string  ''
// array literal []
// objeto literal {}
// função literal function (){}
const pessoa = {
    nome : 'Luiz',
    sobrenome: 'Otávio'
}

console.log(pessoa.nome, pessoa.sobrenome)
console.log(pessoa['nome'], pessoa['sobrenome'])

const chave = 'nome'
console.log(pessoa[chave])

new Array() //[]

const pessoa1 = new Object()
pessoa1.nome = 'Luiz'
pessoa1.sobrenome = 'Otávio'
console.log(pessoa1)

const pessoa2 = {
    nome : 'Luiz',
    sobrenome: 'Otávio'
}

delete pessoa1.nome // apagar chave em obj
console.log(pessoa1)
pessoa1.nome = 'luiz'
pessoa1.idade = 30
pessoa1.falarNome = function(){
    console.log(`${this.nome}, está falando seu nome`)
}
pessoa1.falarNome()
pessoa1.getDataNascimento = function(){
    const dataAtual = new Date()
    return dataAtual.getFullYear() - this.idade
}

console.log(pessoa1.getDataNascimento())

for (let chave in pessoa1){
    console.log(chave)
}
for (let chave in pessoa1){
    console.log(pessoa1[chave])
}

// factory function / constructor functions / Classes

function criaPessoa( nome, sobrenome,altura) {
    return {
        nome,
        sobrenome,
        altura,
        get nomeCompleto() {
           return `${this.nome} ${this.sobrenome}` 
        }
    }
}

const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1)
console.log(p1.nomeCompleto)

function Pessoa(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade

//  Object.freeze(this) // Nenhum objeto criado com essa função pode ser alterado
}

function Pessoa1(nome, sobrenome, idade){
    this.nome = nome
    this.sobrenome = sobrenome
    this.idade = idade

   
}

const p11 = new Pessoa('Luiz', 'Miranda', 12)
console.log(p11)
const p22 = new Pessoa1('Maria', 'Carla', 15 )
// {} <- this ->
// return this; // {}

// p1 = (ENDERECODEMEMORIA) -> 'Valor'
// p1 = (OUTROENDERECODEMEMORIA) (ERRO)
// P1.ENDERECODEMEMORIA
//Const pode mudar o valor salvo em memoria mas não pode salvar o endereço da memoria

Object.freeze(p11) // O valores (valor salvo em momeria) não pode ser alterado
console.log(p22, p11)
p11.nome = 'Outra Coisa'
console.log(p11)

delete p22.nome
console.log(p22)





