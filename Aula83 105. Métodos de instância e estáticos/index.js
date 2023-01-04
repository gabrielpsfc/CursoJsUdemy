class ControleRemoto {
    constructor(tv){
        this.tv = tv
        this.volume = 0
    }

    aumentarVolume (){
        this.volume +=2
    }
    // método de instancia
    diminuirVolume (){
        this.volume -=2
    }
    // metodo static, não será herdado para instancias, sendo refente apenas à classe
    static trocaPilha (){
        return 'Olá'
    }
}

const controle = new ControleRemoto('LG')
console.log(controle)
controle.aumentarVolume()
controle.aumentarVolume()
controle.aumentarVolume()
console.log(ControleRemoto.trocaPilha())
console.log(controle)
