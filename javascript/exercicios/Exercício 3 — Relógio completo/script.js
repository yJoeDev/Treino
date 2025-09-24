var data = new Date()
var hora = data.getHours()
var min = data.getMinutes()
var sec = data.getSeconds()
var casM = min.toFixed(2)
var casS = sec.toFixed(2)


if(min == 0 && sec >= 30){
    console.log(`Agora sao exatamente ${hora}:${casM}:${casS}. Hora cheia!`)
} else if (min == 0){
    console.log(`Agora sao exatamente ${hora}:${casM}:${casS}. Hora cheia!`)
} else if (sec >= 30){
    console.log(`Agora sao exatamente ${hora}:${casM}:${casS}. Meia-minuto!`)
} else {
    console.log(`Agora sao exatamente ${hora}:${casM}:${casS}.`)
}