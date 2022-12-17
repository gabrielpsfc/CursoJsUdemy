//função construtura -> objetos
//função fabrica -> objetos criaPessoa
//Construtura -> Pessoa (new) *iniciada com caixa alta


function Pessoa(nome, sobrenome){
    // Atributos ou métodos privados
    const ID = 123456
    const metodoInterno = function(){
        
    }
    // Atributos ou métodos públicos
    this.nome = nome
    this.sobrenome = sobrenome

    this.metodo = function(){
        console.log(this.nome + ': Sou um método')
    }
    // no need return
}
//Pessoa.nome = nome


const p1 = new Pessoa('Luiz', 'Otávio')
const p2 = new Pessoa('Maria', 'Oliveira')


console.log(p2.nome)
p1.metodo()
p2.metodo()
