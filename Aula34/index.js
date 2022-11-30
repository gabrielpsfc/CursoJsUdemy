const frutas = ['Maça', 'Pêra', 'Uva', 'Luiz', 'Otávio', 'João', 'Miranda']

console.log(frutas.length)


console.log('linha 0')
console.log('linha 1')
console.log('linha 2')
console.log('linha 3')
console.log('linha 4')
console.log('linha 5')
// i - index
for (let i = 0; i < frutas.length; i++) {
    console.log(`Índice ${i}, ${frutas[i]}`);
}