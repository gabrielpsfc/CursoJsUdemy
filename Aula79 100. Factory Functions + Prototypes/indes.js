function criaPessoa(nome, sobrenome) {
    const pessoaPrototype = {
        falar() {
            console.log(`${this.sobrenome}, ${this.nome} está falando`)
        },

        comer() {
            console.log(`${this.sobrenome}, ${this.nome} está comendo`)
        },

        beber() {
            console.log(`${this.sobrenome}, ${this.nome} está bebendo`)
        }
    }

    return Object.create(pessoaPrototype, {
        nome: {value:nome},
        sobrenome: {value: sobrenome}
    })


}


const p1 = criaPessoa('Luiz', 'Otávio')
console.log(p1)

/**
 *         falar(){
            console.log(`${this.sobrenome}, ${this.nome} está falando`)
        },

        comer(){
            console.log(`${this.sobrenome}, ${this.nome} está comendo`)
        },

        beber(){
            console.log(`${this.sobrenome}, ${this.nome} está bebendo`)
        }
 */

    



