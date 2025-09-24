var data = new Date()
var hora = data.getHours()
var sem = data.getDay()


switch(sem){
    case 0: 
    console.log('Domingo')
    break
    case 1:
        console.log('Segunda')
        break
    case 2:
        console.log('Terca')
        break
    case 3:
        console.log('Quarta')
        break
    case 4:
        console.log('Quinta')
        break
    case 5:
        console.log('Sexta')
        break
    case 6:
        console.log('Sabado')
        break
    default:
        console.log('[ERRO] processo invalido!')
}
if(sem == 5 && hora >= 18){
    console.log('Hoje é Sexta-Feira, já é noite! O fim de semana está chegando 😎')
} else if (sem == 0 || sem == 6){
    console.log(`Hoje e ${sem}. Aproveite, e fim de samana, e sao examente ${hora}`)
} else {
    console.log(`Hoje e ${sem}. Bom trabalho, e dia ultil, e sao exatamente ${hora}h`)
}
