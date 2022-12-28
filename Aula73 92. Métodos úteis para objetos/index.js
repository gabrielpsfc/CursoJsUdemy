/**
 * Object.values
 * Object.entries
 * Object.assign(des, any)
 * Object.getOwnPropertyDescriptor(o, 'prop')
 * ...(spread) 
 * Object.keys (retorna as chaves)
 * Object.freeze (congela o objeto)
 * Object.defineProperties (define várias propriedades)
 * Object.defineProperty (define uma propriedade)
 */

const produto = {nome: 'Caneca', preco: 1.8}
const produto1 = {nome: 'Caneca', preco: 1.8, material: 'Porcelana'}
const outraCoisa = produto

produto.nome ='Luiz Otávio'
outraCoisa.preco = 1.9
console.log(outraCoisa)
console.log(produto)
//Ambas as variáveis apontam para o mesmo lugar na memória

const outraCoisaCopia = {...produto}
outraCoisaCopia.nome = 'Gabriel Soares'
console.log(outraCoisaCopia,  produto)
// outraCoisaCopia e produto apontam para lugares diferêntes na memoria

const outraCoisaCopia1 = {...produto, material: 'Porcelana'}
outraCoisaCopia1.nome = 'Gabriel Soares'
console.log(outraCoisaCopia1,  produto)
// outraCoisaCopia e produto apontam para lugares diferêntes na memoria, pode-se add novos itens após o spread

const caneca = Object.assign({}, produto, {material: 'Porcelana'})
console.log(caneca)
console.log(produto)
// copiar obj para outra obj por meio de Object.assign()

const ObjKeys = Object.keys(produto)
console.log(ObjKeys)
// object.keys

const freeze = Object.freeze(produto1)
produto1.nome = 'Carlos'
console.log(produto1)
// Object.freeze torna o objeto inalteravel



Object.defineProperty(produto, 'nome', {
    writable: false,
    configurable: false,
    value: 'Qualquer outra coisa'

})
const ObjgetOPD = Object.getOwnPropertyDescriptor(produto, 'nome')
console.log(ObjgetOPD)
const ObjgetOPDT = Object.getOwnPropertyDescriptor(produto, 'preco')
console.log(ObjgetOPDT)

produto.nome = 'OUtra coisa'
delete produto.nome
console.log(produto.nome)

produto.preco = 'OUtra coisa'
delete produto.preco
console.log(produto)
// retorna as propriedades de uma propriedade do objeto

console.log(Object.values(produto1))
console.log(Object.keys(produto1))
console.log(Object.entries(produto1))

for (let entry of Object.entries(produto1)){
    console.log(entry)
}
for (let [chave, valor] of Object.entries(produto1)){
    console.log(chave, valor)
}

// retorna os valores, keys e arrays com valores + keys respectivamente

