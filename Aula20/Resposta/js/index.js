function meuEscopo(){
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];
    

    function recebeEventoform(evento){
        evento.preventDefault();

        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value


        });

        console.log(pessoas)
        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }
    console.log(pessoas)
    form.addEventListener('submit', recebeEventoform)

}
meuEscopo()

//    form.onsubmit = function (evento){
//        evento.preventDefault()
//        alert(1)
//        console.log('Foi enviado')
//    };
//    let contador = 1
//    function recebeEventoform(evento){
//        evento.preventDefault()
//        console.log(`Form não foi enviado ${contador}`)
//        contador ++
//        
//    }

/**
 * function criarObjeto(nome, sobrenome, peso, altura) {
            return {
                nome,
                sobrenome,
                peso,
                altura
            }
        }

        pessoas.push(criarObjeto(nome.value, sobrenome.value,peso.value, altura.value))      
        resultado.innerHTML = ''
        for(let c = 0; c <= pessoas.length; c++){            
            resultado.innerHTML +=`<p>${pessoas[c].nome}</p>`
            resultado.innerHTML += `<p>${pessoas[c].sobrenome}</p>`
            resultado.innerHTML +=`<p>${pessoas[c].peso}</p>`
            resultado.innerHTML += `<p>${pessoas[c].altura}</p>`
        }
        
    }
    console.log(pessoas)
 */