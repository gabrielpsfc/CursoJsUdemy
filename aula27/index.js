//var intem =  (condição) ? 'if true' : 'if false'

const pontuacaoUsuario = 1001
const nivelUsuario = pontuacaoUsuario >= 1000 ? 'Usuario vip' : 'Usuario normal'
console.log(nivelUsuario)


const corUsuario = null

const corPadrao = corUsuario || 'Preta';

console.log(nivelUsuario, corPadrao)
/*if (pontuacaoUsuario >= 1000){
    console.log('Usuario vip')
}else{
    console.log('Usuário normal')
    
}*/

