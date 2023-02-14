exports.paginaInicial =(requisição, resposta, next) => {
    resposta.render('index')

    next()

}

exports.trataPost = (requisição, resposta) =>{
    resposta.send(requisição.body)
}

