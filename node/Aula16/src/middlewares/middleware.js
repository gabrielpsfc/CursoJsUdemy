exports.middlewareGlobal = (requisição, resposta, next)=>{
    resposta.locals.umaVariavelLocal = 'Este é o valor da variável local'

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

exports.checkCsrfError = (err, req, res, next) => {
    if(err && err.code === 'EBADCSRFTOKEN'){
        return res.render('404')

    }
    
}

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
  };


