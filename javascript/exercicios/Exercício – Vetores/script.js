let caixa = document.getElementById('caixa')
let caixinha = []
for(let pedindoNumeros = 1; pedindoNumeros <= 5; pedindoNumeros++){
    let numero = Number(window.prompt('Digite um numeros: '))
    caixinha.push(numero)
}
window.alert(`Ordem cresente ${caixinha.sort()}`)
let buscar = Number(window.prompt('Qual numero deixa ver de novo?'))
caixa.innerHTML = `Numero buscado ${caixinha.indexOf(buscar)}`