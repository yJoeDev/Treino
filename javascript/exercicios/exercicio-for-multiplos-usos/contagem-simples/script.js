/*
for(let numero = 1; numero <= 20; numero++){
    console.log(`${numero}`)
}
*/
/*
for(let numero = 2; numero <= 20; numero += 2){
    console.log(`${numero}`)
}
*/
/*
for(let numero = 1; numero <= 20; numero += 2){
    console.log(`${numero}`)
}
*/
/*
let numero = 5
for(let tabuada = 1; tabuada <= 10; tabuada++){
    let c = numero*tabuada
    console.log(`${c}`)
}
*/
let caixa = document.querySelector('div#dados')
let numero = Number(window.prompt('Digite um Numero: '))
for(let tabuada = 1; tabuada <= 10; tabuada++){
    let conta = numero*tabuada
    caixa.innerHTML += `${numero} x ${tabuada} = ${conta} <br>`
}