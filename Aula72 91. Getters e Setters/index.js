// defineProperty - getter e setters

function Produto(nome, preco, estoque) {
    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque
    Object.defineProperty(this, 'estoque', {
        enumerable: true, // mostra a chave
       // value: estoque, //valor da chave
       // writable: false, //pode alterar o valor
        configurable: true, // pode apagar/reconfigurar
        get: function(){
            return estoquePrivado
        },
        set: function(valor){
            if (typeof valor !== 'number'){
                throw new TypeError('Mensagem')
            }
        }


    })
}

const p1 = new Produto('Camiseta', 20, 3)
//console.log(p1)
//p1.estoque = 'O valor que eu quero'
//console.log(p1.estoque)

function criaProduto(nome){
    return{
        get nome(){
            return nome
        },
        set nome(valor){
            nome = valor.replace('coisa', '')
        }
    }
}

const p2 = criaProduto('Camiseta')
console.log(p2)
console.log(p2.nome)
p2.nome = 'qualquer coisa'
console.log(p2.nome)




