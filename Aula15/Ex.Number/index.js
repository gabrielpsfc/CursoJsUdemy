let numero = Number(prompt('Digite um número'))
let res =  document.querySelector("div#res")


function retorno (){   

    res.innerHTML = `${Number(numero)} <br>`
    res.innerHTML += `A raiz quadrada do número digitado é ${numero**(1/2)} <br>`
    res.innerHTML += `A parte inteira do número digitado é ${Math.floor(numero)} <br>`
    res.innerHTML += `O número ${numero} é inteiro? ${Number.isInteger(numero)} <br>`
    res.innerHTML += `O valor digitado é NaN: ${Number.isNaN(numero)} <br>`
    res.innerHTML += `O valor digitado arredondado para baixo é ${Math.floor(numero)} <br>`
    res.innerHTML += `O valor digitado arredondado para cima é ${Math.ceil(numero)} <br>`
    res.innerHTML += `Aplicando duas casas decimais ${(numero.toFixed(2))} <br>`




}