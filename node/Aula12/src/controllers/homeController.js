exports.paginaInicial =(requisição, resposta) => {
    resposta.render('index')
}

exports.trataPost = (requisição, resposta) =>{
    resposta.send('Sua nova rota de post')
}

