//funções auto invocadas IIFE -  Immediately invoked function expression
(function(){

})()


/*(function(){
    const nome = 'Luiz'
    console.log(nome)
    
})();*/

(function(idade, peso, altura){
    const sobrenome = 'Miranda'
    function criaNome(nome){
        return nome + ' ' + sobrenome
    }

    function falaNome(){
        console.log(criaNome('Luiz'))
    }
    falaNome()
    console.log(idade, peso, altura)
})(30,80,1.80)


// envolve a função em () e a chama imediatamente com () após