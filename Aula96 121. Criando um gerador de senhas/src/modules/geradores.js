const rand = (max, min) => Math.floor(Math.random() * (max-min) + min)
const geraMaiscula = () =>  String.fromCharCode(rand(65, 91))
const geraMinuscula = () =>  String.fromCharCode(rand(97, 123))
const geraNúmero = () =>  String.fromCharCode(rand(48, 58))
const simbolos = '!#$%&()*+,-./:;<=>?@[\/]^_{}|~+'
const geraSimbolos = () => simbolos[rand(0, simbolos.length)]


console.log(geraMaiscula())
console.log(geraMinuscula())
console.log(geraNúmero())
console.log(geraSimbolos())

export default function geraSenha (qtd, maiuscula, minusculas, numeros, simbolos){
    let tipo = []
    const randTipo = (max=tipo.length, min=0) => Math.floor(Math.random() * (max -min) + min)
    const senhaArray = []
    qtd = Number(qtd)
    for( let i =0; i< qtd; i++){
    maiuscula && tipo.push(geraMaiscula())
    minusculas && tipo.push(geraMinuscula())
    numeros && tipo.push(geraNúmero())
    simbolos && tipo.push(geraSimbolos())
    senhaArray.push(tipo[randTipo()]) 
    tipo = []       
    }
   

    return (senhaArray.join(''))

}

/**
maiuscula && senhaArray.push(geraMaiscula())
minusculas && senhaArray.push(geraMinuscula())
numeros && senhaArray.push(geraNúmero())
simbolos && senhaArray.push(geraSimbolos())
 */








