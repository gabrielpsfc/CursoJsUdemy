
const Contato = require('../models/ContatoModel')

exports.index = async (requisição, resposta, next) => {
    const contatos = await Contato.buscaContatos()
    resposta.render('index', { contatos: contatos})
    return
}




