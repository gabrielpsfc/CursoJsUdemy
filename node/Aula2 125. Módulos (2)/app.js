const multiplicação = require('./a/b/c/d/mod')
const cachorro = require('./z/mod2.0')

console.log(multiplicação(2,2))
console.log(cachorro(9,12))

console.log(__filename)
console.log(__dirname)

const path = require('path')
console.log(path)
console.log(path.resolve(__dirname,'..','..'))


// para frente = ./   para traz ../