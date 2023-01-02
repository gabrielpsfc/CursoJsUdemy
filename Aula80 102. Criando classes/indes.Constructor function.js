

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
