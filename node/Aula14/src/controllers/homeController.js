const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes'
  
}).then(dados => console.log(dados)).catch(e => console.log(e))



exports.paginaInicial =(requisição, resposta, next) => {
    resposta.render('index')

    next()

}

exports.trataPost = (requisição, resposta) =>{
    resposta.send(requisição.body)
}

