const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Um título de testes',
    descricao: 'Uma descrição de testes'
  
}).then(dados => console.log(dados)).catch(e => console.log(e))



exports.paginaInicial =(requisição, resposta, next) => {
    requisição.session.usuario = {nome: 'Gabriel', logado: true}
    console.log(requisição.session.usuario)
    resposta.render('index')

    next()

}

exports.trataPost = (requisição, resposta) =>{
    resposta.send(requisição.body)
}

