/**
 * && -> todas as expressões precisam ser verdadeiras para o return ser verdadeiro( ao encontrar valor falso, return valor falso )
 * || -> todas as expressões precisam ser falsas para o return ser falso
 * 
 * Entre 0 - 11 - Bom dia
 * ENTRE 12 - 17 - Boa tarde
 * Entre 18 - 23 - Boa noite
 * IF pode ser usado sozinho
 * Sempre que utilizo a palabra else, preciso utilizar a palavra IF
 * Eu posso ter vários else ifs na checagem
 * Só se pode ter um único else na checagem
 * Pode-se utiizar apenas else e if
 */
let hora = 50;

if(hora >= 0 && hora <= 11){
    console.log('bom dia')
    
}else if ( hora >= 12 && hora <= 17){
    console.log('Boa tarde')
    
}else if (hora >=18  && hora <= 23 ){
    console.log('Boa noite')

}else {
    console.log('Olá')

}

let tenhoGrana = 0
if (tenhoGrana){
    console.log('Vou sair de casa')
}else {
    console.log('! vou sair de casa')
}


