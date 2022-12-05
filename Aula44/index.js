

try {


    console.log(naoexisto)

} catch (e) {
    console.log('naoexisto não existe')

    console.log(typeof (e))
}


function soma(x, y) {
    if (
        typeof x !== 'number' ||
        typeof y !== 'number') {
        throw new TypeError('x e y precisam ser números')
    }

    return x + y


}
try {
    console.log(soma(10, 5));
    console.log(soma('10', 5));
} catch(error){
    console.log(error)
    console.log('Algo mais amigável ao usuário')
}

try{
    console.log(naoexiste)
}catch(erro) {
    console.log(TypeError(erro))

}