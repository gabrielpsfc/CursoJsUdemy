//function gerar(evento){
//    evento.preventDefault()
//    alert('TESTE')

//}
let array = []


function gerar(evento) {
    alert('1')
    let res = document.querySelector('#resposta')
    let nome = String(document.querySelector('#nome').value)
    let sobrenome = String(document.querySelector('#sobrenome').value)
    let peso = Number(document.querySelector('#peso').value)
    let altura = Number(document.querySelector('#altura').value)
    function gerarNome(name, lastName, weight, height) {
        return {
            name,
            lastName,
            weight,
            height
        }

    }
    array.push(gerarNome(nome, sobrenome, peso, altura))


    res.innerHTML = '';
    for (let c = 0; c <= array.length; c++) {
        res.innerHTML += `<p>Nome: ${array[c].name}</p>`;
        res.innerHTML += `<p>Sobrenome: ${array[c].lastName}</p>`;
        res.innerHTML += `<p>Peso: ${array[c].weight}</p>`;
        res.innerHTML += `<p>Altura: ${array[c].height}</p>`;
        res.innerHTML += `<p>Array: ${array.length}</p>`;
    };





    evento.preventDefault()



}

/**
 * function gerarNome (name, lastName, weight, height){
        return{
            name,
            lastName,
            weight,
            height
        }

    }
    array.push(gerarNome(nome, sobrenome, peso, altura))

    res.innerHTML = `${nome}`
    res.innerHTML += `${sobrenome}`
    res.innerHTML += `${peso}`
    res.innerHTML += `${altura}`
    res.innerHTML += `${array.length}`
 */