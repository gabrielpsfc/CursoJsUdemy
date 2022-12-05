try {
    // executada caso não haja erros
} catch (e) {
    // é executada quando há erros
} finally {
    // sempre é executado (pode ser omitido)
}

try {
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('fechei o arquivo')
} catch (e) {
    // é executada quando há erros
    console.log('Tratando o erro')
} finally {
    // sempre é executado (pode ser omitido)
    console.log(' FINALLY: Eu sempre sou executado')
}


try {
    console.log(variavelnaodeclarada)
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('fechei o arquivo')
} catch (e) {
    // é executada quando há erros
    console.log('Tratando o erro')
} finally {
    // sempre é executado (pode ser omitido)
    console.log(' FINALLY: Eu sempre sou executado')
}

try {
  //  console.log(variavelnaodeclarada)
    console.log('Abri um arquivo')
    console.log('Manipulei o arquivo e gerou erro')
    console.log('fechei o arquivo')

    try{
        console.log(b)
    }catch(e){
        console.log('Deu erro')
    }finally{
        console.log('Tambem')
    }

} catch (e) {
    // é executada quando há erros
    console.log('Tratando o erro')
} finally {
    // sempre é executado (pode ser omitido)
    console.log(' FINALLY: Eu sempre sou executado')
}


function retornHora(data){
    if (data && !(data instanceof Date)){
        throw new TypeError('Esperando instância de Date.')
    }
    if(!data){
        data = new Date()
    }

    return data.toLocaleTimeString('pt-BR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false
    });
}

try{
const data = new Date('01-01-1970 12:58:12')
const hora = retornHora(11)
console.log(hora)
}catch(e){
    // Tratar err

}finally{
    console.log('Tenha um bom dia')
}