const relogio = document.querySelector('.relogio')
const iniciar = document.querySelector('.iniciar')
const pausar = document.querySelector('.pausar')
const zerar = document.querySelector('.zerar')

function mostraHora(){
    let date = new Date();
    return date.toLocaleTimeString('pt-BR', {hour12: false})
}


let variavel 

iniciar.addEventListener('click', function(event){
    event.preventDefault()
    let timer = setInterval(function(){
        variavel = timer
        relogio.innerHTML =`${mostraHora()}`
    }, 1000)
   
})

pausar.addEventListener('click', function(event){
    setTimeout(function (){
        clearInterval(variavel)
    })
}, 1000)

zerar.addEventListener('click', function(event){
    relogio.innerHTML = '00:00:00'
})


/**
 * function mostraHora(){
    let data = new Date();

    return data.toLocaleTimeString('pt-BR',
    { hour12: false})
}





const timer = setInterval(function(){
    console.log(mostraHora())
    console.log('1')
}, 1000)


setTimeout(function (){
    clearInterval(timer)
}, 5000)

setTimeout(function(){
    clearInterval(timer)
}, 4000)

setTimeout(function(){
    console.log('Olá mundo!')
}, 4000)




 */