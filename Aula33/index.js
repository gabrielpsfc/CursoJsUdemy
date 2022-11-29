const pessoa = {
    nome: 'Luiz',
    sobrenome: 'Miranda',
    idade: 30,
    endereço: {
        rua: 'Av Brasil',
        numero: 320
    }

};

console.log(pessoa)
console.log(pessoa.nome)
//Atribuição via desestruturação
const { nome : teste = 'Não existe', sobrenome, idade } = pessoa;
console.log(teste, sobrenome, idade)


const { nome : n, sobrenome: sobre, idade: id} = pessoa
console.log(n, sobre, id)

const { endereço: {rua: r = 12345, numero}, endereço } = pessoa
console.log(r, numero, endereço)

const {nome, ...resto} = pessoa
console.log(nome, resto)
