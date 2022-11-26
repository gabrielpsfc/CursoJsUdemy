//capturar evento de submit do formulário

const form = document.querySelector('#formulario'); //captura de formulário

form.addEventListener('submit', function (e) { //adição do evento de submit 
    e.preventDefault() // prevenção do default (impede o envio do formulário)
    const inputPeso = e.target.querySelector('#peso') //captura dos dados do imput
    const inputAltura = e.target.querySelector('#altura')//captura dos dados do imput
    const peso = Number(inputPeso.value) // tentativa de converção dos imputs para number
    const altura = Number(inputAltura.value) // tentativa de converção dos imputs para number

    if (!peso) { // caso o peso não seja avaliado como Number 
        setResultado('Peso inválido', false)
        return // parar a função
    }

    if (!altura) { // caso a Altura não seja avaliada como Number 
        setResultado('Altura inválida', false)
        return // parar a função
    }

    const imc = getImc(peso, altura) //calculo do IMC (func getImc)
    const nivelImc = getNivelImc(imc) // retornar o nivel do IMC (func getNivelImc)
    
    const msg = `Seu IMC é ${imc} (${nivelImc})` // cria msg com os valores
    console.log(imc, nivelImc)

    setResultado(msg, true) //cria o innerHTML e define o class da tag 



})

function getNivelImc(imc) { // criamos uma array com os valores possíveis para mensagem e seleciona via if qual vai ser o item da array a ser retornado com base no valor do IMC
    const nivel = ['Abaixo do peso', 'Peso Normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) return nivel[5]
    if (imc >= 34.9) return nivel[4]
    if (imc >= 29.9) return nivel[3]
    if (imc >= 24.9) return nivel[2]
    if (imc >= 18.5) return nivel[1]
    if (imc < 18.5) return nivel[0]


}

function getImc(peso, altura) { // CALCULO DO IMC
    const imc = peso / (altura ** 2)
    return imc.toFixed(2)

}

function criaP() { //CRIA A TAG PARAGRAFO 
    const p = document.createElement('p')
    return p
}

function setResultado(msg, isValid) { //Função que retorna o resultado, ela recebe uma mensagem e se a mensagem é true or false
    const resultado = document.querySelector('#resultado')// seleciona a tag com id resultado
    resultado.innerHTML = '' // zera o innerHtml da tag id resultado
    
    const p = criaP() //cria parágrafo
    if (isValid) { // confere se a flag invalid é verdadeira
        p.classList.add('paragrafo-resultado') // caso verdadeira cria a tag p com class paragrafo-resultado
    }else { // caso a flag seja false
        p.classList.add('bad') // cria a tag p com class bad
    }
    p.innerHTML = msg // adiciona msg na tag p
    resultado.appendChild(p) //adiciona a tag p criada no innerHtml da const resultado


}


/**
 * 
 *  <div >
            <h2 >IMC</h2>
            <p>
                Menos do que 18,5 <br>
                Entre 18,5 e 24,9 <br>
                Entre 25 e 29,9 <br>
                Entre 30 e 34,9 <br>
                Entre 35 e 39,9 <br>
                Mais do que 40 <br>
            </p>
        </div>
        <div >
            <h2 >Resultado</h2>
            <p>
                Abaixo do peso <br>
                Peso Normal <br>
                Sobrepeso <br>
                Obesidade grau 1 <br>
                Obesidade grau 2 <br>
                Obesidade grau 3 <br>
            </p>
        </div>
 */


/**
 * function setResultado (msg){
    const resultado = document.querySelector('#resultado') // selecionou a div resultado
    resultado.innerHTML = `` // limpou o HTML da div resultado
    const p = document.createElement('p'); // criou uma tag 'p'
    p.classList.add('paragrafo-resultado') // inseriu a class 'paragrafo-resultado' na tag 'p'
    p.innerHTML = 'Qualquer coisa' // inseriu o conteudo 'Qualquer coisa' dentro da tag p
    resultado.appendChild(p); // inseriu a tag p na const resultado

}
 */