const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')

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

app.set('views', path.resolve(__dirname,'src', 'views'))
app.set('view engine', 'ejs')

app.use(routes)





let porta = 3003
app.listen(porta, ()=>{
        console.log(`Acessar http://localhost:${porta}`);
        console.log(`Servidor executando na porta ${porta}`)
})

