const elementos = [
    {tag: 'p', texto: 'Frase 1'},
    {tag: 'div', texto: 'Frase 2'},
    {tag: 'footer', texto: 'Frase 3'},
    {tag: 'section', texto: 'Frase 4'}
]
const acao = document.querySelector('.acao')
const div = document.querySelector('.insert')
const remove = document.querySelector('.remove')

acao.onclick = function (){
    for(let i = 0; i < elementos.length; i++){
        let element = document.createElement(`${elementos[i].tag}`)
        element.innerHTML = (`${elementos[i].texto}`)
        div.appendChild(element)
    }
    
}

remove.onclick = function(){
    let insertP = div.getElementsByTagName('p')
    let insertDiv = div.getElementsByTagName('div')
    let insertFooter = div.getElementsByTagName('footer')
    let insertSection = div.getElementsByTagName('section')
    div.removeChild(insertP[(insertP.length)-1])
    div.removeChild(insertDiv[(insertDiv.length)-1])
    div.removeChild(insertFooter[(insertFooter.length)-1])
    div.removeChild(insertSection[(insertSection.length)-1])
}



/**
 * for(let i = 0; i < elementos.length; i++){
    let element = document.createElement(`${elementos[i].tag}`)
    element.innerHTML = (`${elementos[i].texto}`)
    div.appendChild(element)
}
}
 * 
 * let paragrafo = document.createElement(`${elementos[0].tag}`)
    paragrafo.innerHTML = (`${elementos[0].texto}`)
    div.appendChild(paragrafo)
 */