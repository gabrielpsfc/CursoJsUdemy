const nome = 'luiz'
const sobrenome = 'miranda'

const falaNome = () => {
    console.log(`${nome} ${sobrenome}`)
}


/*module.exports.nome = nome
module.exports.sobrenome = sobrenome
module.exports.falaNome = falaNome */

exports.NoMe = nome
exports.sobrenome = sobrenome
exports.falaNome = falaNome
this.qualquerCoisa = 'O que eu quiser exportar'
this.funçaoCriada = (a =Number,b=Number) => { return a*b}
//console.log(module.exports)




