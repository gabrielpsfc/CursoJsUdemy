const HomeModel = require('../models/HomeModel')

HomeModel.create({
    titulo: 'Titulo da coleção estudos',
    descricao: 'descrição da coleção estudos'
  
}).then(dados => console.log(dados)).catch(e => console.log(e))



exports.paginaInicial =(requisição, resposta, next) => {

    resposta.render('index', {
       titulo: 'Este será <span style = "color: red" >titulo</span> da pagina',
        numeros: [0,1,2,3,4,5,7,8,9]  
    })
    return

}

exports.trataPost = (requisição, resposta) =>{
    resposta.send(requisição.body)
}

