function rand(min, max) {
    min *= 1000
    max *= 1000
    return Math.floor(Math.random() * (max - min) + min)
}


function esperaAi(msg, tempo){
    return new Promise(function(resolve, reject){
        if(typeof msg !== 'string') reject(false)
            // return to stop e promise
        setTimeout(() => {
            resolve(msg)
        }, tempo)
    })
}

// Promise.all Promise.race Promise.resolve Promise.reject

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/all
/*const promises =[
    'Primeiro valor',
    esperaAi('Promisse 1',3000 ),
    esperaAi('Promisse 1',500 ),
    esperaAi('Promisse 1',1000 ),
    'Outro valor'
]*/

/*Promise.all(promises).then(function(valor){
    console.log(valor)
})
.catch(function(erro){
    console.log(erro)
})
const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo')
})

const promiseConst =[ promise1, promise2, promise3]*/
//Promise.all(promiseConst).then(valor => console.log(valor))

function esperaAiError(msg, tempo){
    return new Promise(function(resolve, reject){
        if(typeof msg !== 'string') {
            reject('Caiu em erro')
            return }
        setTimeout(() => {
            resolve(msg + 'tru all')
        }, tempo)
    })
}

/*Promise.all([
    'Primeiro valor',
    esperaAiError('Promise 1',3000 ),
    esperaAiError('Promise 1',500 ),
    esperaAiError('asdf',1000 ),
    esperaAiError('Promise 1',1000 ),
    'Outro valor'  
]).then((valor)=>{
    console.log(valor)
}).catch((error) => {
    console.log(error)
})*/

// Promise.race (retorna a primeira promise concretizada)


/*Promise.race(
    [
    esperaAiError('Promise 1',3000 ),
    esperaAiError('Promise 2',500 ),
    esperaAiError('asdf',1000 ),
    esperaAiError('Promise 1',1000 )  ]
).then((valor)=>{
    console.log(valor)
}).catch((error) => {
    console.log(error)
}) // retorna o primeiro valor*/

function baixaPagina(){
    const emCache = false
    if(emCache){
        return Promise.resolve('Pagina em cache') // retorna em then
    }
    return esperaAi('Baixei a página', 1000)
}

baixaPagina()
.then(dados => console.log(dados))
.catch(e => console.log(e))


function baixaPaginaReject(){
    const emCache = true
    if(emCache){
        return Promise.reject('Pagina em cache') // retorna em catch
    }
    return esperaAi('Baixei a página', 1000)
}

baixaPaginaReject()
.then(dados => console.log(dados))
.catch(e => console.log('erro:', e))