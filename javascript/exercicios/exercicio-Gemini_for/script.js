function imprimirPares(){
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let res = document.getElementById('res')
    if(ini.value.length == 0 || fim.value.length == 0){
        window.alert('Numero invalido. Digite um numero valido')
    } else {
        res.innerHTML = 'Contando: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        for(let c = i; c <= f; c += 2){
            res.innerHTML += `${c}`
        }
        if(i == f || f == 0){
            window.alert('Impossivel contar pares tente novamente')
        }
    }
}