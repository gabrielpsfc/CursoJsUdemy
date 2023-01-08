function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}



function esperaAi(msg, tempo) {
    setTimeout(() => {
        console.log(msg)
    }, tempo)
}

/*esperaAi('Frase 1', rand(0.5, 2))
esperaAi('Frase 2', rand(0.5, 2))
esperaAi('Frase 3', rand(0.5, 2))*/

// com callbacks

function esperaAiCB(msg, tempo, cb) {
    setTimeout(() => {
        console.log(msg)
        if (cb) cb() //*
    }, tempo)
}

/*esperaAiCB('Frase 1', rand(0.5, 2), function(){
    esperaAiCB('Frase 2', rand(0.5, 2),function(){
        esperaAiCB('Frase 3', rand(0.5, 2))       
    })   
})*/

// com promisses
function esperaAiPromisse(msg, tempo) {
    //   function com parametros  resolve, reject
    //                  resolve = codigo executado com sucesso, reject = !resolve
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })         // construtor da Promise


}

/*esperaAiPromisse('Frase 1', rand(0.5, 1, 5))
    .then(resposta => {
        console.log(resposta)
        return esperaAiPromisse('Frase 2', rand(0.5, 1.5))
    }).then(msg => {
        console.log(msg)
        return esperaAiPromisse('Frase 3', rand(0.5, 1.5))
    }).then(promise => {
        console.log(promise)
    }).then(function () {
        console.log('Last msg')
    })
    .catch() */

function conectarBD(tempo) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(tempo < 1000){
                resolve(`tempo :${tempo}, dentro do esperado, searching file...`)
            }
            reject('tempo de resposta superior ao esperado')
        }, tempo)
    })
}

function searchingFile(time, filesize){
    return new Promise(function(resolve, reject){
        setTimeout(()=>{           
            if(time >= 1000){
                reject (`'tempo de resposta superior ao esperado ${time}`)
            }else if(filesize < 1000){
                reject (`'filesize superior ao esperado ${filesize}`)   
            }
            resolve(`filesize ${filesize} Kb :ok; time ${time}Ms: ok`)
        })
    })
}

conectarBD(rand(0.1, 1.2))
.then(ok => {console.log(ok)
return searchingFile(rand(0.5, 1.2), rand(0.5,1.5))
}).then(msg => console.log(msg))
.catch(Nok => console.log(Nok))


