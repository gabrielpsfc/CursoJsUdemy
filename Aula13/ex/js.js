

const nome = 'Gabriel Pereira Soares'
let listaNome = nome.split(' ')
let contagem = 0

for(let c = 0; c < listaNome.length; c++){
          
    contagem += listaNome[c].length
    
}
console.log(listaNome)
console.log(contagem)
