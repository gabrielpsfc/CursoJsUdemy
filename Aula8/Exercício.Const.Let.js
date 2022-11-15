let nome = 'Luiz Otávio Miranda'
let idade = 30
let peso = 84
let altura = 1.8
let imc = peso /(altura**2)
console.log(`${nome} tem ${idade} anos, pesa ${peso} kg, tem ${altura} m de altura e seu IMC é de ${imc}`)

let data = new Date
let ano = data.getFullYear()
const nomec = ' Luiz Otávio'
const sobrenome = 'Miranda'
const idadec = 30
const pesoc = 84
const alturaEmMe = 1.80
let imcc
let anoNascimento
imcc = peso / (alturaEmMe ** 2)
anoNascimento = ano - idadec
console.log(`${nomec}${sobrenome} tem ${idadec} anos, pesa ${pesoc} kg, tem ${alturaEmMe} m de altura e seu IMC é de ${imcc}`)
console.log(`${nomec} nasceu em ${anoNascimento}`)