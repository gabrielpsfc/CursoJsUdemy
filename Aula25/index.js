let numero = 10;

if (numero >= 0 && numero <= 5){
    console.log('numero >= 0 && numero <= 5')
}else {
    console.log('! (numero >= 0 && numero <= 5)')
}

if (numero >= 0 && numero <= 5){
    console.log('O numero digitado está entre 0 e 5')
}else if (numero >= 6 && numero <= 8){
    console.log('O numero está entre 6 e 8')
}else if (numero >= 9 && numero <= 11){
    console.log('O número está entre 9 e 11')
}else {
    console.log( "O número não está entre 0 e 11")
}
// Js retorna a primeira condição verdadeira e ignora oque vier após

if (numero >= 0 && numero <= 5){
    console.log('O numero digitado está entre 0 e 5')
}else if (numero >= 6 && numero <= 8){
    console.log('O numero está entre 6 e 8')
}else if (1 ===1){
    console.log('Literal')
}else if (numero >= 9 && numero <= 11){
    console.log('O número está entre 9 e 11')
}else {
    console.log( "O número não está entre 0 e 11")
}

//Para verificar possibilidades verdadeiras diferentes, separe os if's


if (1 ===1){
    console.log('Literal')
}

if (numero >= 0 && numero <= 5){
    console.log('O numero digitado está entre 0 e 5')
}else if (numero >= 6 && numero <= 8){
    console.log('O numero está entre 6 e 8')
}else if (numero >= 9 && numero <= 11){
    console.log('O número está entre 9 e 11')
}else {
    console.log( "O número não está entre 0 e 11")
}

