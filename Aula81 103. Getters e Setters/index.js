const _velocidade = Symbol('velocidade')
class Carro {
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }

    set velocidade(valor){
        console.log('SETTER')
        if(typeof valor !== 'number') return
        if(valor >= 100|| valor <= 0) return
        this[_velocidade] = valor

    }

    get velocidade(){
        console.log('GETTER')
        return this[_velocidade]
    }

   

     acelerar(){
        if(this[_velocidade] >= 100) return
        this[_velocidade]++

    }

    freiar(){
        if(this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c1 = new Carro('Fusca')


console.log(c1.velocidade)
c1.velocidade = 99
console.log(c1.velocidade)



class PessoaNova {
    constructor(nome, sobrenome){
        this.nome = nome
        this.sobrenome = sobrenome
    }

    get nomeCompleto (){   // nomeCompleto é um atributo
        return `${this.nome}  ${this.sobrenome}`
    }

    set nomeCompleto(valor){
        valor = valor.split(' ')
        this.nome = valor.shift()
        this.sobrenome = valor.join()
    }

    nomeCompletoFunction (){ // nomeCompletoFunction é uma função
        return `${this.nome}  ${this.sobrenome}`
    }
}

const p11 = new PessoaNova ('Sina', 'Italy')
console.log(p11)
console.log(p11.nomeCompleto)
p11.nomeCompleto = 'Gabriel Pereira Soares'
console.log(p11.nome)
console.log(p11.sobrenome)
console.log(p11.nomeCompleto)


//--------------------------



/**class Carro1 {
    constructor(nome){
        this.nome = nome
        this[_velocidade] = 0
    }

    get velocidade(){
        return this[_velocidade]
    }

    acelerar(){
        if(this[_velocidade] >= 100) return
        this[_velocidade]++

    }

    freiar(){
        if(this[_velocidade] <= 0) return
        this[_velocidade]--
    }
}

const c11 = new Carro1('Fusca')

for(let i =0; i<=200; i++){
    c11.acelerar()

}
c11.velocidade = 2000

console.log(c11.velocidade)*/