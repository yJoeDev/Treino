var data = new Date()
var hora = data.getHours()
var dia = data.getDay()
var nomeDia


switch(dia){
    case 0:
        nomeDia = 'Domingo'
        break
    case 1:
        nomeDia = 'Segunda'
        break
    case 2:
        nomeDia = 'Terca'
        break
    case 3: 
        nomeDia = 'Quarta'
        break
    case 4: 
        nomeDia = 'Quinta'
        break
    case 5:
        nomeDia = 'Sexta'
        break
    case 6:
        nomeDia = 'Sabado'
        break
    default:
        console.log('[ERRO] data invalida!')
        break
    }
    
if(hora <= 12){
    console.log(`Bom dia, hoje e ${nomeDia}`)
} else if(hora < 18){
    console.log(`Boa tarde, hoje e ${nomeDia}`)
} else {
    console.log(`Boa noite, hoje e ${nomeDia}`)
}
