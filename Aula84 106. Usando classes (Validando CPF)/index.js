
class ValidaCpf {
    constructor(CPF) {
        this.CPF = CPF
    }
    limpaCPF(cpf){        
        return cpf.replace(/\D+/g, '')
    }
    validaCpf() {
        this.CPF = this.limpaCPF(this.CPF)
        if (this.CPF === '' ||
            this.CPF.length !== 9 ||
            this.CPF == "000000000" ||
            this.CPF == "111111111" ||
            this.CPF == "222222222" ||
            this.CPF == "333333333" ||
            this.CPF == "444444444" ||
            this.CPF == "555555555" ||
            this.CPF == "666666666" ||
            this.CPF == "777777777" ||
            this.CPF == "888888888" ||
            this.CPF == "999999999") return false
        return true

    }

    primeiroDigito(){
        if(!this.validaCpf()) return false
        this.CPF = this.limpaCPF(this.CPF)
        var sum = 0
        for (let digito in this.CPF){
            sum += this.CPF.charAt(digito) *(10-digito)

        }
        let digito = 11 - (sum % 11)
        if (digito === 11 || digito === 10){
            digito = 0
        }
        return String(digito)
        

    }

    segundoDigito(){
        if(!this.validaCpf()) return false
        this.CPF = this.limpaCPF(this.CPF) + this.primeiroDigito()        
        var sum = 0
        for (let digito in this.CPF){
            sum += this.CPF.charAt(digito) * (11-digito)
        }
        let digito = 11 -( sum%11)
        if (digito === 11 || digito === 10){
            digito = 0
        }
        return String(digito)
    }
}

var Inicio = new ValidaCpf('562.244')

console.log(Inicio.primeiroDigito())
console.log(Inicio.segundoDigito())














