exports.middlewareGlobal = (requisição, resposta, next)=>{


    if(requisição.body.cliente){
        requisição.body.cliente = requisição.body.cliente.replace('Soares', 'Soares é inválido')
        console.log()
        console.log(`Vi que voce postou ${requisição.body.cliente}`)
        console.log()
    }


    console.log('');
    next()
}

exports.outroMiddleware = (requisição, resposta, next)=>{
    console.log('Outro Middleware')
    next()
}