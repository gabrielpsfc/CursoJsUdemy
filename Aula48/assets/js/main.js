const inputTarefas = document.querySelector('.input-tarefa')
const btnAddTarefa = document.querySelector('.btn-add-tarefa')
const tarefas = document.querySelector('.tarefas')

function criaLi (){
    const li = document.createElement('li')
    return li
}

inputTarefas.addEventListener('keypress', function(e){
    if (e.keyCode === 13){
        if(!inputTarefas.value) {
            return
        }else{
        criaTarefa(inputTarefas.value)}
       
    }
})

function criaBotaoApagar(li){
    li.innerText += ' '
    const botaoApagar = document.createElement('button')
    botaoApagar.innerText = 'Apagar'
    //botaoApagar.classList.add('Apagar')
    botaoApagar.setAttribute('class', 'apagar')
    botaoApagar.setAttribute('title', 'apagar tarefa')
    li.appendChild(botaoApagar)
}

function limpaInput(){
    inputTarefas.value =''
    inputTarefas.focus(); // adicionar cursor no input HTML
}


function criaTarefa(textoInput){
    const li = criaLi()
    li.innerText = textoInput
    tarefas.appendChild(li)
    limpaInput()
    criaBotaoApagar(li)
    salvarTarefas()
}


btnAddTarefa.addEventListener('click', function(e){
   if ( !inputTarefas.value) return;
    criaTarefa(inputTarefas.value)
    
})


document.addEventListener('click', function(e){
    const el = e.target
    if (el.classList.contains('apagar')){
        el.parentElement.remove()
        salvarTarefas()
    }
})

function salvarTarefas(){
    const liTarefas = tarefas.querySelectorAll('li')
    const listaDeTarefas = []

    for (let tarefa of liTarefas){
        let tarefaTexto = tarefa.innerText
        tarefaTexto = tarefaTexto.replace('Apagar', '').trim()
        listaDeTarefas.push(tarefaTexto)
        
    }

    const tarefasJSON = JSON.stringify(listaDeTarefas)
    localStorage.setItem('tarefas', tarefasJSON)
    console.log(listaDeTarefas)
}

function adiconarTarefasSalvas(){
    const tarefas = localStorage.getItem('tarefas')
    const listaDeTarefas = JSON.parse(tarefas)
    
    for (let tarefa of listaDeTarefas) {
        criaTarefa(tarefa)

    }
}

adiconarTarefasSalvas()