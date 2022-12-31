const cpf1 = function (cpf) {
    d1 = 0
    d2 = 0
    soma = 0
    for (let i = 0; i < 9; i++) {
        soma += cpf.charAt(i) * (10 - i)
    }
    if (11 -(soma % 11) > 9) {
        d1 = 0
    } else {
        d1 = 11 -(soma % 11)
    } 
    soma = 0
    cpf = cpf + d1
    for (let i = 0; i< 10; i++){
        soma += cpf.charAt(i) * (11-i)
    }
    if( 11 - (soma % 11) > 9){
            d2 = 0
        }else{
            d2 = 11 - (soma % 11)
        }
    return  cpf + d2
}

console.log(cpf1('047444301'))







