function rand(min = 0, max = 1.5) {
    if (max > min) {
        min *= 1000
        max *= 1000
        return Math.floor(Math.random() * (max - min) + min)
    }
    return ` O valor ${max} deve necessariamente ser superior a ${mim}`
}

function esperaAi(msg, tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (typeof msg !== 'string') {
                reject('CAI NO ERRO')
            }
            resolve(msg.toUpperCase() + ' -  Passei na promise')
            return
        }, tempo)
    })
}

/*esperaAi('Fase 1', rand(0, 1.5))
    .then(valor => {
        console.log(valor)
        return esperaAi('Fase 2', rand(0, 1.2))
    }).then(valor => {
        console.log(valor)
        return esperaAi('Fase 3', rand())
    }).then(end => console.log(end))
    .catch(e => console.log(e))*/

/*async function executa() {
    const fase1 = await esperaAi('Fase 1 await ', rand())
    console.log(fase1)
    const fase2 = await esperaAi('Fase 2 await ', rand())
    console.log(fase2)
    const fase3 = await esperaAi('Fase 3 await', rand())
    console.log(fase3)
    console.log('Terminamos na fase: ', fase3)
}
executa()*/


async function executaTratado() {
    try {
        const fase1 = await esperaAi('Fase 1 await ', rand())
        console.log(fase1)
        const fase2 = await esperaAi(0, rand())
        console.log(fase2)
        const fase3 = await esperaAi('Fase 3 await', rand())
        console.log(fase3)
        console.log('Terminamos na fase: ', fase3)
    } catch (e) {
        console.log(e)
    }
}
executaTratado()


