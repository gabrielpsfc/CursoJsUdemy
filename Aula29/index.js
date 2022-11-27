const data = new Date('2022-05-09 00:00:00')
const diaSemanaglobal = data.getDay()


/*if (diaSemana === 0){
    diaSemanaTexto = 'Domingo'
}else if(diaSemana === 1){
    diaSemanaTexto = 'Segunda'
}else if(diaSemana === 2){
    diaSemanaTexto = 'Terça'
}else if(diaSemana === 3){
    diaSemanaTexto = 'Quarta'
}else if(diaSemana === 4){
    diaSemanaTexto = 'Quinta'
}else if(diaSemana === 5){
    diaSemanaTexto = 'Sexta'
}else if(diaSemana === 6){
    diaSemanaTexto = 'Sabado'
} else{
    diaSemanaTexto =''
}*/

/*switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domigo';
        break
    case 1:
        diaSemanaTexto = 'Segunda';
        break
    case 2:
        diaSemanaTexto = 'Terça';
        break
    case 3:
        diaSemanaTexto = 'Quarda';
        break
    case 4:
        diaSemanaTexto = 'Quinta';
        break
    case 5:
        diaSemanaTexto = 'Sexta';
        break
    case 6:
        diaSemanaTexto = 'Sabado';
        break
    default:
        diaSemanaTexto =''
        break
}*/


function getDayWeek (diaSemana){
    let diaSemanaTexto 
    
switch (diaSemana) {
    case 0:
        diaSemanaTexto = 'Domigo';
        return diaSemanaTexto
    case 1:
        diaSemanaTexto = 'Segunda';
        return diaSemanaTexto
    case 2:
        diaSemanaTexto = 'Terça';
        return diaSemanaTexto
    case 3:
        diaSemanaTexto = 'Quarda';
        return diaSemanaTexto
    case 4:
        diaSemanaTexto = 'Quinta';
        return diaSemanaTexto
    case 5:
        diaSemanaTexto = 'Sexta';
        return diaSemanaTexto
    case 6:
        diaSemanaTexto = 'Sabado';
        return diaSemanaTexto
    default:
        diaSemanaTexto =''
        return diaSemanaTexto
}



}

let diaSemanaTexto = getDayWeek(diaSemanaglobal)

console.log(diaSemanaglobal, diaSemanaTexto)



