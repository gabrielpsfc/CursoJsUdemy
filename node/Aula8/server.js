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




// /profiles/12345?
//campanha=googleads & 
//nome_campanha=seila

app.use(express.urlencoded({extended: true}))


app.get('/',(requisição, resposta) => {
    resposta.send(`<form action="/" method="POST">
    Nome do cliente : <input type="text" name="nome"> <br>
    Outro campo: <input type="text" name="Outrocampo">
    <button>Olá mundo!</button>
</form>`)
})

app.post('/',(requisição, resposta) => {
    console.log(requisição.body)
    resposta.send(`Oque você me enviou foi ${requisição.body.nome} e ${requisição.body.Outrocampo}`)
})

app.get('/testes/:idUsuarios?/:parametro?', (requisição, resposta) => {
    // / profiles/1
    // / profiles/?chave1=valor1&chave2=valor2&chave3=valor3
    console.log(requisição.query)
    console.log(requisição.params)
    resposta.send(requisição.params)   
})


let porta = 3003
app.listen(porta, ()=>{
        console.log(`Acessar http://localhost:${porta}`);
        console.log(`Servidor executando na porta ${porta}`)
})


