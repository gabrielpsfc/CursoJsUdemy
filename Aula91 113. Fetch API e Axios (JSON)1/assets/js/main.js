//fetch('pessoas.json')
//.then( r => r.json())
//.then(json => carregaElemntosNaPagina(json))

axios('pessoas.json').then( r => carregaElemntosNaPagina(r.data))

function carregaElemntosNaPagina(json){
    const table = document.createElement('table')
    for(let pessoa of json){
        const tr = document.createElement('tr')

        td = document.createElement('td')
        td.innerHTML = pessoa.nome
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.idade
        tr.appendChild(td)

        td = document.createElement('td')
        td.innerHTML = pessoa.salario
        tr.appendChild(td)

        table.appendChild(tr)
        
    }
    const resultado = document.querySelector('.resultado')
    resultado.appendChild(table)
}


