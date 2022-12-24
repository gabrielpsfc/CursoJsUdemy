const a1 = [1,2,3]
const a2 = [4,5,6]
const a3 = a1 + a2
console.log(a3)
console.log(typeof(a3))
//=============================
const a4 = a1.concat(a2)
console.log(a4)
const a5 = a1.concat(a2, [7,8,9], 'Luiz')
console.log(a5)
//==========================
// ... rest -> ... spread

const a6 = [...a1, ...a2]
console.log(a6)
const a7 = [...a1, 'Luiz', ...a2, [20,30], 25, 12/6]
console.log(a7)
// add os valores do array literal e n o array literal
const a8 = [...a1, 'Luiz', ...a2, ...[20,30], 25, 12/6]
console.log(a8)