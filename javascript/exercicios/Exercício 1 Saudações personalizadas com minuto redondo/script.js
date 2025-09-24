var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
var sem = data.getDay()

if(minutos == 0){
    console.log(`Agora e exatamente ${hora}:00 em ponto!`)
} else {
    console.log(`Agora sao ${hora}:${minutos}. Ainda nao deu a hora cheia`)
}

switch(sem){
    case 0:
        if (minutos == 0){
            console.log(`Hoje e Domingo e sao exatemente ${hora}:00`)
        } else {
            console.log(`Hoje e Domingo e sao examente ${hora}:${minutos}`)
        }
        break
    case 1:
        if (minutos == 0){
            console.log(`Hoje e Segunda-Feira e sao exatemente ${hora}:00`)
        } else {
            console.log(`Hoje e Segunda-Feira e sao examente ${hora}:${minutos}`)
        }
        break
    case 2:
        if (minutos == 0){
            console.log(`Hoje e Terca-Feira e sao exatemente ${hora}:00`)
        } else {
            console.log(`Hoje e Terca-Feira e sao examente ${hora}:${minutos}`)
        }
        break
    case 3:
        if (minutos == 0){
            console.log(`Hoje e Quarta-feira e sao exatemente ${hora}:00`)
        } else {
            console.log(`Hoje e Quarta-feira e sao examente ${hora}:${minutos}`)
        }
        break
    case 4:
        if (minutos == 0){
            console.log(`Hoje e Quinta-Feira e sao exatemente ${hora}:00`)
        } else {
            console.log(`Hoje e Quinta-Feira e sao examente ${hora}:${minutos}`)
        }
        break
    case 5:
        if (minutos == 0){
            console.log(`Hoje e Sexta-Feira e sao exatemente ${hora}:00`)
        } else {
            console.log(`Hoje e Sexta-Feira e sao examente ${hora}:${minutos}`)
        }
        break
    case 6:
        if (minutos == 0){
            console.log(`Hoje e Sabado e sao exatemente ${hora}:00`)
        } else {
            console.log(`Hoje e Sabado e sao examente ${hora}:${minutos}`)
        }
        break
    default:
        console.log('[ERRRO] de codigo!!!')
        break
}