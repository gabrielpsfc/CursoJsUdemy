const display = document.querySelector('.display')

document.addEventListener('click', function (e) {
    display.focus()  
    const el = e.target
    console.log(el)

    if (el.classList.contains('btn-num')) {
        alimentaDisplay(el.innerText)
        console.log(el.innerText)
    }
    if (el.classList.contains('btn-clear')){
        display.value =''
    }
    if(el.classList.contains('btn-del')){
        display.value = display.value.slice(0, -1)
    }
    if(el.classList.contains('btn-eq')){
        realizaConta()
    }

})

function alimentaDisplay(al) {
    display.value += al
}

function realizaConta(){
    let conta = display.value
    try{
        conta = eval(conta)
        if(!conta){
            alert('Conta inválida')
            return
        }else{
            display.value = String(conta.toFixed(2))
        }
    }catch(e){
        alert('Conta inválida')
        return
    }
}


