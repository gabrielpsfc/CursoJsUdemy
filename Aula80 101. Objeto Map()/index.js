const pessoas = [
    {id: 3, nome: 'Luiz'},
    {id: 2, nome: 'Maria'},
    {id: 1, nome: 'Helena'}
]

const novasPessoas = {}
for (let pessoa of pessoas){
    const {id} = pessoa
    novasPessoas[id] = {...pessoa}
}

console.log(novasPessoas)


const novasPessoasMap = new Map()
for (const pessoa of pessoas){
    const { id } = pessoa
    novasPessoasMap.set(id, {...pessoa})
}

console.log(novasPessoasMap)


console.log(novasPessoasMap.keys())
//console.log(novasPessoas.keys())
console.log(typeof(novasPessoas))
console.log(typeof(novasPessoasMap))


