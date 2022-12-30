// Produto - aumento, desconto
// Camiseta = cor, caneca = material 

function Produto(nome, preco){
    this.nome = nome,
    this.preco = preco
}

Produto.prototype.aumentopercen = function(percen){
    this.preco = this.preco + (this.preco *(percen /100))

}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}
Produto.prototype.reduz = function(quantia){
    this.preco -= quantia
}

function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}

Camiseta.prototype = Object.create(Produto.prototype)
Camiseta.prototype.constructor = Camiseta
//Object.setPrototypeOf(camiseta, Produto.prototype)

const produto = new Produto('Gen', 111)


const camiseta = new Camiseta('Regata', 7.5, 'Preta')
console.log(camiseta)
camiseta.aumento(10)
console.log(camiseta)
console.log(produto)



Camiseta.prototype.aumento = function(percen){
    this.preco = this.preco + (this.preco *(percen /100))

}
camiseta.aumento(100)
console.log(camiseta)


function Caneca (nome, preco, material, estoque){
    Produto.call(this, nome, preco)
    this.material = material,

    Object.defineProperty(this, 'estoque',{
        enumerable: true,
        configurable: false,
        get: function(){
            return estoque
        },
        set: function (valor){
            if( typeof valor !== 'number') return
            estoque = valor
        }
     
    })
}
Caneca.prototype = Object.create(Produto.prototype)
const caneca = new Caneca('Caneca', 13, 'Plástico', 5)
console.log(camiseta)
console.log(caneca)
caneca.estoque = 100
console.log(caneca)
console.log(caneca.estoque)

//Object.setPrototypeOf(p2, Produto.prototype)
