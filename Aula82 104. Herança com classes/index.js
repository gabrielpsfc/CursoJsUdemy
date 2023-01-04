

class DispositivoEletronico {
    constructor( nome, fab) {
        this.fab = fab
        
        this.nome = nome
        this.ligado = false
    }

    ligar() {
        if (this.ligado) {
            console.log('Dispositivo já ligado')
            return
        }
        this.ligado = true
    }

    desligar() {
        if (!this.ligado) {
            console.log('Dispositivo já desligado')
            return
        }
        this.ligado = false

    }

}


const d1 = new DispositivoEletronico('Smartphone', 1997)
console.log(d1)
d1.ligar()
d1.ligar()
console.log(d1.ligado)
d1.desligar()
console.log(d1.ligado)


class Smartphone extends DispositivoEletronico {
    constructor( cor, modelo, tela ){
        super()
        this.cor = cor
        this.mode= modelo
        this.tela = tela
    }

}
const s1 = new Smartphone()
console.log(s1)
console.log(s1.nome)
console.log(s1.ano)
console.log(s1.cor = 10)
console.log(s1)
s1.nome = 'shitcoins'
console.log(s1)

class Tablet extends DispositivoEletronico{
    constructor(tipo, temWifi){
        super()
        this.temWifi = temWifi
        this.tipo = tipo
    }

    ligar(){
        console.log('Metodo "ligar" foi alterado')
    }
}

const t1 = new Tablet('text', 'sim')
console.log(t1.nome = 'algo')
console.log(t1)

