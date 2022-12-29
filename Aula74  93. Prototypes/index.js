/**
 * Javascript é baseado em protótipos para passar propriedades e métodos de um objeto para outro
 * 
 * Definição de protótipo
 * Protótipo é o termo usado para referir ao que foi criado pela primeira vez, servindo de modelo ou molde para futuras produções
 * 
 * Todos os objetos tem uma referência inter para um protótipo (__proto__) que vem da propriedade prototype da função construtora que foi usada pa criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor do JS vai tentar encontrar esse membro no próprio objeto e depois a cadeia de protótipos é usada até o topo (null) até encontrar (ou não) tal membro
 * 
 * 
 * pessoa1 --> Pessoa.prototype --> Object.prototype 
 */



// construra -> molde (classe)
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
 //   this.nomeCompleto = () => 'Original ' + this.nome + ' ' + this.sobrenome
}

Pessoa.prototype.estouAqui ='HAHA'
Pessoa.prototype.nomeCompleto = function (){
    return `${this.nome} ${this.sobrenome}`
}

// instancia (criar novo objeto)
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função construtora
const pessoa2 = new Pessoa('Maria', 'A') // <- Pessoa = Função construtora
const data = new Date()

console.dir(pessoa1)
console.dir(pessoa2)
console.dir(data)

tex = Pessoa.prototype === pessoa1.__proto__
console.dir(tex)