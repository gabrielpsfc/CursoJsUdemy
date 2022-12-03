
function MinMax (a,b){
    minimo = a
    maximo = a
    if (b > a){
        maximo = b
        minimo = a
    }else{
        maximo = a
        minimo = b
    }
    console.log(maximo, minimo)
    }


MinMax(1,10)
MinMax(50,12)
MinMax(1,1)
MinMax(-12,0)