// new Date(0)
function relogio() {
    const relogio = document.querySelector('.relogio')
    let segundos = 0
    let timer

    function getTimeFromSeconds(segundos) {
        const data = new Date(segundos * 1000);
        return data.toLocaleTimeString('pr-BR', {
            hour12: false,
            timeZone: 'GMT' //'UTC'
        })

    }  

    function IniciaRelogio() {
        timer = setInterval(function () {
            segundos++;
            relogio.innerHTML = getTimeFromSeconds(segundos)
        }, 1000)

    }

    document.addEventListener('click', function (e) {
        const el = e.target
        if (el.classList.contains('zerar')) {
            clearInterval(timer)
            relogio.classList.remove('pausado')
            relogio.innerHTML = '00:00:00'

        }
        if (el.classList.contains('iniciar')) {
            relogio.classList.remove('pausado')
            clearInterval(timer)
            IniciaRelogio()
        }

        if (el.classList.contains('pausar')) {
            clearInterval(timer)
            relogio.classList.add('pausado')
        }
    })
}
relogio()

