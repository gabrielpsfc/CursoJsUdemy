// Superclass
function Conta(agencia, conta, saldo){
    this.agencia = agencia
    this.conta = conta
    this.saldo = saldo
}

Conta.prototype.sacar = function(valor){
    if(this.saldo < valor){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

Conta.prototype.depositar = function(valor){
    this.saldo += valor
    this.verSaldo()
}
Conta.prototype.verSaldo = function(){
    console.log(`Ag/c ${this.agencia}/${this.conta}| Saldo R$${this.saldo.toFixed(2)}`)
}
Conta.prototype.constaThis = function(){
    return this
}

/*const CC1 = new Conta(0201, 2010000001, 1000.20)
console.log(CC1)
console.log(CC1.constaThis())
CC1.verSaldo()
CC1.depositar(50)
CC1.sacar(150)*/

/*const conta1 = new Conta(11, 22, 10)
console.log(conta1)
conta1.depositar(11)
conta1.depositar(10)
conta1.sacar(31)
conta1.sacar(0.01)*/

function ContaCorrente(agencia, conta, saldo, limite){
    Conta.call(this, agencia, conta, saldo)
    this.limite = limite
}
ContaCorrente.prototype = {...Conta.prototype}
ContaCorrente.prototype.constructor = ContaCorrente

ContaCorrente.prototype.sacar = function(valor){
    if(valor > (this.saldo + this.limite)){
        console.log(`Saldo insuficiente: ${this.saldo}`)
        
        return
    }
    this.saldo -= valor
    this.verSaldo()
}

function ContaPoupança(agencia, conta, saldo){
    Conta.call(this, agencia, conta, saldo)
}
ContaPoupança.prototype = {...Conta.prototype}
ContaPoupança.prototype.constructor = ContaPoupança

const contaCorrente = new ContaCorrente(11, 22, 0, 100)
const contaPoupança = new ContaPoupança(12,33,0)
console.log(contaPoupança)

contaPoupança.depositar(10)
contaPoupança.sacar(110)
contaPoupança.sacar(1)

console.log()
contaCorrente.depositar(10)
contaCorrente.sacar(110)
contaCorrente.sacar(1)






