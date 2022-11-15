let umaString = 'Um "texto"'
let umaString1 = "um \"texto\""
let umaString2 = "um \\texto"
console.log(umaString, umaString1, umaString2)

// strings são indexadas, cada caractere tem um índice 
//012345678
//ola mundo 

let string = 'um texto'
console.log(string[0])
console.log(string[1])
console.log(string[2])
console.log(string[3])
console.log(string[4])
console.log(string[5])
console.log(string[6])
console.log(string[7])
console.log(string[8])
console.log(string[9])
console.log(string.charAt(6))
console.log(string.concat('',' em', ' um', ' lindo', ' dia'))
console.log(`${umaString} em um lindo dia`)
console.log(string.indexOf('texto'))
console.log(string.indexOf('Texto'))
console.log(string.indexOf('um'))
console.log(string.indexOf('um', 3)) //localizar 'um' a partir do indice 3
console.log(string.indexOf('o', 3))
console.log(string.lastIndexOf('o')) //Começa a procurar da ultima posição até a primeira
console.log(string.lastIndexOf('o', 3)) 
console.log(string.lastIndexOf('m', 3))
console.log(string.match(/[a-z]/))
console.log(string.search(/[a-z]/))
console.log(string.search(/x/))
console.log(string.indexOf('x'))
console.log(string.replace('um', 'outra'))
string = 'O rato roeu a roupa do rei de roma.'
console.log(string.replace(/r/g, '#'))
console.log(string.length)
console.log(string.slice(2,6))
console.log(string.slice(-3))
console.log(string.slice(32))
console.log(string.slice(-5))
console.log(string.slice(30))
console.log(string.slice(-5, string.length - 1))
console.log(string.slice(-5, -1))
console.log(string.split(' '))
console.log(string.split('r'))
console.log(string.split('r', 2))
console.log(string.split('r', 4))
console.log(string.toUpperCase())
console.log(string.toLowerCase())
//w3schools, MDN

