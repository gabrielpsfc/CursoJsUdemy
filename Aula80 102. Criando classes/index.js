// class = constructor function

class Pessoa {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome

    }

    falar(){
        console.log(`${this.nome} está falando.`)
    }
    comer(){
        console.log(`${this.nome} está comendo`)
    }
    beber(){
        console.log(`${this.nome} está bebendo`)
    }
}

// instanciar pessoa

const p1 = new Pessoa('Gabriel', 'Soares')
const p2 = new Pessoa('Eliane', 'Moises')
const p3 = new Pessoa('Maria', 'Miranda')
const p4 = new Pessoa('João', 'Vinícius')
console.log(p1,p2,p3,p4)


function Pessoa1 (nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome
}

Pessoa1.prototype.falar = function (){
    console.log(`${this.nome} está falando.`)
}
Pessoa1.prototype.comer = function (){
    console.log(`${this.nome} está comendo`)  
}
Pessoa1.prototype.beber = function(){
    console.log(`${this.nome} está bebendo`)
}


const p11 =new Pessoa1('Gabriel', 'Soares')
const p22 =new Pessoa1('Eliane', 'Moises')
const p33 = new Pessoa1('Maria', 'Miranda')
const p44 = new Pessoa1('João', 'Vinícius')
console.log(p11,p22,p33,p44)


