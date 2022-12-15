// Factory function (função fábrica)
// Constructor Function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso ){
    return{
        nome,
        sobrenome,
        fala(assunto){
            return `${this.nome} está falando ${assunto}`
        },
        altura,
        peso,
        imc(){
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
        
    }
}

const p1 = criaPessoa('Luiz', 'Otávio', 1.80, 80);
console.log(p1.imc())
const p2 = criaPessoa('Maria', 'Joaquina', 1.60, 42);
console.log(p1.fala('falando sobre Js'))
console.log(p2.fala('falando sobre JS'))
console.log(p2.imc())
console.log(p1.nome)
console.log(p2.nome)

console.log(p1.nome)
console.log(p1.sobrenome)
console.log(p1.imc())


//------------------------------------------------------------

function criaPessoa1(nome, sobrenome, altura, peso ){
    return{
        nome,
        sobrenome,
         get nomeCompleto(){
            return `${this.nome} ${this.sobrenome}`
        },
        //setter
        set nomeCompleto(valor){
            valor = valor.split(' ')
            console.log(valor)
            this.nome = valor.shift()
            this.sobrenome = valor.join(' ')
            console.log(this.nomeCompleto)

        },

        fala(assunto=  'Falando sobre nada'){
            return `${this.nome} está falando ${assunto}`
        },
        altura,
        peso,
        get imc(){ //* Getter, obtem apenas o valor 
            const indice = this.peso / (this.altura ** 2)
            return indice.toFixed(2)
        }
        
    }
}

const p11 = criaPessoa1('Luiz', 'Otávio', 1.80, 80);
console.log(p1.imc)
const p22 = criaPessoa1('Maria', 'Joaquina', 1.60, 42);
console.log(p11.fala('falando sobre Js'))
console.log(p22.fala('falando sobre JS'))
console.log(p22.imc)
console.log(p11.nome)
console.log(p2.nome)

console.log(p11.nome)
console.log(p11.sobrenome)
console.log(p11.imc)
p11.nomeCompleto = 'Maria Oliveira Silva'
console.log(p11.nomeCompleto)






