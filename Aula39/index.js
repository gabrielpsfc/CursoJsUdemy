const nome = 'Luiz'
let controle = 0

while (controle <= 10) {
 //   console.log(controle)
    controle++

}

controle = 0
while (controle < nome.length) {
 //   console.log(nome[controle])
    controle++

}

function random(min, max) {
    const r = Math.random() * (max - min) + min
    return Math.floor(r)
}
const min = 0
const max = 111
let rand = random(min, max)

let size = 3
let size1 = 10
let medias = []

for (let i = 1; i <= size1; i++)
{let listaLenght = []
    for (let i = 1; i <= size; i++) {  
    rand = random(min, max)
    let lista = []
    while (rand !== 1) {
        rand = random(min, max)
        lista.push(rand)
        
    } listaLenght.push(lista.length)
}



let sum = 0
for (let i in listaLenght){
    sum += listaLenght[i]    
}

medias.push(sum / size)}

let sum = 0
for (let i in medias){
    sum += medias[i] }
console.log((sum/size1))
console.log('###########################################')


do {
    rand = random(min, max)
 console.log(rand)
}while(rand !== 10);


//[
 //   90, 124, 88,  23, 201,  45, 62,
 //   50,  30, 63, 118,  37, 236, 40,
 //   41,  42, 29,  72,  12,  26
 // ]
 // 1429