function gerar() {

   { let array = [];

    let nome = String(document.querySelector('#nome').value);
    let sobrenome = String(document.querySelector('#sobrenome').value);
    let peso = Number(document.querySelector('#peso').value);
    let altura = Number(document.querySelector('#altura').value);
    
    array.push({
        nome: nome,
        sobrenome: sobrenome,
        peso: peso,
        altura: altura
    });

    console.log(array)
    console.log(array.length)}
};