var data = new Date()
var hora = data.getHours()
if(hora < 12){
    console.log('Bom dia!')
} else if(hora <= 18 ){
    console.log('Boa tarde!')
}else {
    console.log('Boa noite!')
}

var diaSem = new Date()
var semana = diaSem.getDay()
switch(semana){
    case 0:
        console.log('Domingo')
        break
    case 1:
        console.log('Segunda feira')
        break
    case 2:
        console.log('Terca Feira')
        break
    case 3:
        console.log('Quarta Feira')
        break
    case 4: 
        console.log('Quinta Feira')
        break
    case 5:
        console.log('Sexta Feira')
        break
    case 6: 
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] numero invalido')
        break
}
