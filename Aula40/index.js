// Continue continua para próxima interação
// break quebra o laço

const numeros = [1,2,3,4,5,6,7,8,9]

for (let numero of numeros ){

    if (numero === 2 || numero === 5){
        console.log('Pulei o n 2 e 5')
        continue
    }

    if (numero === 6){
        console.log('pulei o n 6')
        continue
    }
    console.log(numero)
    if (numero === 7){
        console.log('7 encontrato, saindo...')
        break
    }

    console.log(numero)
}
console.log('#########################')
for (let i in numeros ){
    let numero = numeros[i]
    if (numero === 2 || numero === 5){
        console.log('Pulei o n 2 e 5')
        continue
    }

    if (numero === 6){
        console.log('pulei o n 6')
        continue
    }
    console.log(numero)
    if (numero === 7){
        console.log('7 encontrato, saindo...')
        break
    }

    console.log(numero)
}
console.log('#########################')
for (let i = 0; 1< numeros.length; i++ ){
    let numero = numeros[i]
    if (numero === 2 || numero === 5){
        console.log('Pulei o n 2 e 5')
        continue
    }

    if (numero === 6){
        console.log('pulei o n 6')
        continue
    }
    console.log(numero)
    if (numero === 7){
        console.log('7 encontrato, saindo...')
        break
    }

    console.log(numero)
}

