let a = 'A'; // B
let b = 'B'; // C
let c = 'C'; // A
console.log(a, b, c);
// atribuição por desestruturação 
[a, b, c] = [1,2,3]; 
console.log(a, b, c);
// reatribuindo valor // array
const numero = [4,5,6]; // não esquecer as ';'  quando usar  atribuição por desestruturação 
[a, b, c] = numero;
console.log(a, b, c)

const numeros = [1000, 2000, 3000, 4000, 5000, 6000, 7000, 8000, 9000]


console.log(numeros[0])
                        // rest operator || spread operator
//const [um, dois, tres, ...resto] = numeros
const [um, ,tres, , cinco, , sete] = numeros
console.log(um, tres, cinco, sete)

const numeros1 = [

//      0           1           2
//   0  1  2     0  1  2     0  1  2
    [1, 2, 3],  [4, 5 ,6],  [7, 8, 9]
]

console.log(numeros1[1][2])
//     0      1
//     0   0 1  2
const [ , [ , ,seis]] = numeros1

const [ lista1, lista2, lista3] = numeros1
console.log(lista1[2])
console.log(seis)
