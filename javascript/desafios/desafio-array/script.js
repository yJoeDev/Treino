let caixa = document.getElementById('caixa')
let numero = []
for(let digite =0; digite <= 7;digite++){
    let mostrar = Number(window.prompt('Digite um numero: '))
    numero.push(mostrar)
}
numero.sort()
window.alert(numero)
let digiten = Number(window.prompt('Digite um numero ja digitado'))
let buscar = numero.indexOf(digiten)
if(buscar != -1){
    caixa.innerHTML = `Numero encontrado na posicao ${buscar}`
}else {
    caixa.innerHTML = `Numero nao encontrado`
}