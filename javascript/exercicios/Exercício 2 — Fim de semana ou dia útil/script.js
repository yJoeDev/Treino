var data = new Date()
var hora = data.getHours()
var dia = data.getDay()
var semDia


switch(dia){
    case 0: 
        semDia = 'Domingo'
        break
    case 1: 
        semDia = 'Segunda'
        break
    case 2: 
        semDia = 'Terca'
        break
    case 3: 
        semDia = 'Quarta'
        break
    case 4: 
        semDia = 'Quinta'
        break
    case 5: 
        semDia = 'Sexta'
        break
    case 6: 
        semDia = 'Sabado'
        break
    default:
        console.log('[ERRO] Data invalida!')
    break
}

if(dia == 5 && hora == 18){
    console.log('Ja e noite de sexta!Ofim de semana esta chegando!')
} else if(dia == 0 || dia == 6){
    console.log(`Aproveite e fim de semana! ${semDia}`)
} else {
    console.log(`Dia ultil,bom trabalho! ${semDia}`)
}