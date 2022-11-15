let nome = 'Gabriel'
let data = new Date
let hora = data.getHours()


if(hora < 12){
    console.log(`Meu nome é ${nome}. Estou aprendendo JS às ${hora} horas da manhã`)
}else if (hora < 19) {
    console.log(`Meu nome é ${nome}. Estou aprendendo JS às ${hora} horas da tarde`)
}else{
    console.log(`Meu nome é ${nome}. Estou aprendendo JS às ${hora} horas da noite`)
}

console.log('Meu nome é "Gabriel". Estou aprendendo JS as', 10, 'da manhã')











/*
switch(n){
        case 0:
            msg.innerHTML = 'Voce é uma bebe!'
            img.src ="img15/bebem.webp"
            break
        case 1:
            msg.innerHTML = 'Você é um bebe'
            img.src = "img15/bebe.png"
            break
        case 2:
            msg.innerHTML = 'Você é uma garota!'
            img.src = "img15/garota.png" 
            break
        case 3:
            msg.innerHTML = 'Você é um garoto!'
            img.src ="img15/garoto.webp"
            break
        case 4:
            msg.innerHTML = 'Você é um homem adulto!'
            img.src = "img15/homem.webp"
            break
         case 5:
            msg.innerHTML = 'Você é uma mulher adulta!'
            img.src = "img15/mulher.png"
            break
        case 6:
            msg.innerHTML = 'Você é um homem idoso!'
            img.src = "img15/homemidoso.webp" 
            break
        case 7:
            msg.innerHTML = 'Você é uma mulher idosa!'
            img.src = "img15/mulheridosa.jpeg" 
            break    
        default:*/