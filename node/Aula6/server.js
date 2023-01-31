/**
 * 1 iniciar o npm
 */

const express = require('express')
const app = express()


// http://meusite.com/ <- GET -> Entregue a página
//        CRIAR,   LER, ATUALIZAR, APAGAR
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST     GET     PUT     DELETE                         
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato
app.get('/',(requisição, resposta) => {
    resposta.send(`<form action="/" method="POST">
    Nome: <input type="text" name="nome">
    <button>Enviar</button>
</form>`)
})

app.post('/',(requisição, resposta) => {
    resposta.send(`ok`)
})

app.get('/contato',(requisição, resposta) => {
    resposta.send('Obrigado por entrar em contato')
})

let porta = 3003
app.listen(porta, ()=>{
        console.log(`Acessar http://localhost:${porta}`);
        console.log(`Servidor executando na porta ${porta}`)
})


