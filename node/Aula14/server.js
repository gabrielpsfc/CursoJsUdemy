require('dotenv').config()


const express = require('express')
const app = express()
const routes = require('./routes')
const path = require('path')
const {middlewareGlobal, outroMiddleware} = require('./src/middlewares/middleware')
const mongoose = require('mongoose')

mongoose.set('strictQuery', true)
mongoose.connect(process.env.CONNECTIONSTRING)
.then(()=>{
        app.emit('pronto')
        console.log('Conectei à base de dados')
}).catch(e => console.log(e))


// http://meusite.com/ <- GET -> Entregue a página
//        CRIAR,   LER, ATUALIZAR, APAGAR
// CRUD -> CREATE, READ, UPDATE, DELETE
//         POST     GET     PUT     DELETE                         
// http://meusite.com/sobre <- GET -> Entregue a página /sobre
// http://meusite.com/contato <- GET -> Entregue a página /contato


// npm i --legacy-peer-deps

// /profiles/12345?
//campanha=googleads & 
//nome_campanha=seila



app.use(express.urlencoded({extended: true}))

app.use(express.static(path.resolve(__dirname, 'public')))

app.set('views', path.resolve(__dirname,'src', 'views'))
app.set('view engine', 'ejs')

//Nossos proprios middlewares
app.use(middlewareGlobal)
app.use(outroMiddleware)

app.use(routes)





let porta = 3000
app.on('pronto', () => {
        app.listen(porta, ()=>{
                console.log(`Acessar http://localhost:${porta}`);
                console.log(`Servidor executando na porta ${porta}`)
        })

})


