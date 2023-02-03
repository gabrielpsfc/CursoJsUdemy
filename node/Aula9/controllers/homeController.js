exports.paginaInicial =(requisição, resposta) => {
    resposta.send(`<form action="/" method="POST">
    Nome do cliente : <input type="text" name="nome"> <br>
    Outro campo: <input type="text" name="Outrocampo">
    <button>Olá mundo!</button>
</form>`)
}

exports.trataPost = (requisição, resposta) =>{
    resposta.send('Sua nova rota de post')
}

