var data = new Date()
var hora = data.getHours()
var minutos = data.getMinutes()
hora.toLocaleString(Conhoras)

function Conhoras(){
    
}

if(hora < 12){
    console.log(`Agora sao ${hora}:${minutos} da manha!`)
} else if(hora <= 18){
    console.log(`Agora sao ${hora}:${minutos} da tarde!`)
} else {
    console.log(`Agora sao ${hora}:${minutos} da noite!`)
}

var semana = data.getDay()

switch(semana){
    case 0:
        if(hora < 12){
            console.log(`Hoje e Domingo. Agora sao ${hora}:${minutos} da manha!`)
        } else if(hora <= 18){
            console.log(`Hoje e Domingo. Agora sao ${hora}:${minutos} da tarde!`)
        } else {
            console.log(`Hoje e Domingo. agora sao ${hora}:${minutos} da noite!`)
        }
        break
    case 1:
        if(hora < 12){
            console.log(`Hoje e Segunda-Feira. Agora sao ${hora}:${minutos} da manha!`)
        } else if(hora <= 18){
            console.log(`Hoje e Segunda-Feira. Agora sao ${hora}:${minutos} da tarde!`)
        } else {
            console.log(`Hoje e Segunda-Feira. agora sao ${hora}:${minutos} da noite!`)
        }
        break
    case 2: 
        if(hora < 12){
            console.log(`Hoje e Terca-Feira. Agora sao ${hora}:${minutos} da manha!`)
        } else if(hora <= 18){
            console.log(`Hoje e Terca-Feira. Agora sao ${hora}:${minutos} da tarde!`)
        } else {
            console.log(`Hoje e Terca-Feira. agora sao ${hora}:${minutos} da noite!`)
        }
        break
    case 3: 
        if(hora < 12){
            console.log(`Hoje e Quarta-Feira. Agora sao ${hora}:${minutos} da manha!`)
        } else if(hora <= 18){
            console.log(`Hoje e Quarta-Feira. Agora sao ${hora}:${minutos} da tarde!`)
        } else {
            console.log(`Hoje e Quarta-Feira. agora sao ${hora}:${minutos} da noite!`)
        }
        break
    case 4:
        if(hora < 12){
            console.log(`Hoje e Quinta-Feira. Agora sao ${hora}:${minutos} da manha!`)
        } else if(hora <= 18){
            console.log(`Hoje e Quinta-Feira. Agora sao ${hora}:${minutos} da tarde!`)
        } else {
            console.log(`Hoje e Quinta-Feira. agora sao ${hora}:${minutos} da noite!`)
        }
        break
    case 5:
        if(hora < 12){
            console.log(`Hoje e Sexta-Feira. Agora sao ${hora}:${minutos} da manha!`)
        } else if(hora <= 18){
            console.log(`Hoje e Sexta-Feira. Agora sao ${hora}:${minutos} da tarde!`)
        } else {
            console.log(`Hoje e Sexta-Feira. agora sao ${hora}:${minutos} da noite!`)
        }
        break
    case 6:
        if(hora < 12){
            console.log(`Hoje e Sabado. Agora sao ${hora}:${minutos} da manha!`)
        } else if(hora <= 18){
            console.log(`Hoje e Sabado. Agora sao ${hora}:${minutos} da tarde!`)
        } else {
            console.log(`Hoje e Sabado. agora sao ${hora}:${minutos} da noite!`)
        }
        break
    default:
        console.log('[ERRO] propriedade invalidas')
        break
}