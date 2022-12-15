// Factory function (Função fábrica)
// Constructor function (Função construtora)

function criaPessoa(nome, sobrenome){
    return{
        nome,
        sobrenome,
        fala: function(assunto){
            return`${this.nome} está falando ${assunto}`
        },
        peso: 80
    }
}

const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1.fala('Falando sobre JS'))
// p1.nome = this.nome
console.log(p1)


//==========

function criaPessoa1(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return`${this.nome} está falando ${assunto}`
        },
        altura: a,
        peso: p,
        imc(){
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }
    }
}

const p2 = criaPessoa1('Maria', 'Joaquina', 1.6, 42)
console.log(p2)
console.log(p2.nome)
console.log(p2.sobrenome)
console.log(p2.altura)
console.log(p2.peso)
console.log(p2.imc())




// ==================

function criaPessoa2(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return`${this.nome} está falando ${assunto}`
        },
        altura: a,
        peso: p,
        get imc(){  // imc retorna como atributo e não como função
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }
    }
}

const p3 = criaPessoa2('Maria', 'Joaquina', 1.6, 42)
console.log(p3)
console.log(p3.nome)
console.log(p3.sobrenome)
console.log(p3.altura)
console.log(p3.peso)
console.log(p3.imc)

//==========================

function criaPessoa3(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return`${this.nome} ${this.sobrenome}`
        },
        fala(assunto){
            return`${this.nome} está falando ${assunto}`
        },
        altura: a,
        peso: p,
        get imc(){  // imc retorna como atributo e não como função
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }
    }
}

const p4 = criaPessoa3('Maria', 'Joaquina', 1.6, 42)
console.log(p4)
console.log(p4.nome)
console.log(p4.sobrenome)
console.log(p4.altura)
console.log(p4.peso)
console.log(p4.imc)
console.log(p4.nomeCompleto)

//=====================

function criaPessoa4(nome, sobrenome, a, p){
    return{
        nome,
        sobrenome,
        get nomeCompleto(){
            return`${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor= valor.split(' ') 
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')

        },

        fala(assunto){
            return`${this.nome} está falando ${assunto}`
        },
        altura: a,
        peso: p,
        get imc(){  // imc retorna como atributo e não como função
            const indice = this.peso / (this.altura **2)
            return indice.toFixed(2)
        }
    }
}

const p5 = criaPessoa4('Maria', 'Joaquina', 1.6, 42)
p5.nomeCompleto = 'Marta Oliveira Silva'
console.log(p5.nome)
console.log(p5.sobrenome)
console.log(p5.fala('nada'))


const p6 = criaPessoa4('Maria', 'Joaquina', 1.6, 42)
const p7 = criaPessoa4('João', 'Joaquina', 1.6, 42)
const p8 = criaPessoa4('Junior', 'Joaquina', 1.5, 110)
console.log(p6.imc, p7.imc, p8.imc)




