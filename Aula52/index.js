//Escopo léxico

const nome = 'Luiz';

function falaNome(){
    
    console.log(nome)
}
falaNome()


function usaFalaNome(){
    const nome = 'Otávio' // fora do escopo léxico
    falaNome()
}

usaFalaNome()

