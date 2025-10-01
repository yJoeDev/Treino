let numeros = [4, 3, 5, 7, 9]
numeros.sort()
numeros.push(2)
console.log(numeros)
console.log(numeros[0])
console.log(numeros.length)

for(let pos = 0; pos < numeros.length; pos++){
    console.log(`A sequencia dos numeros e: ${numeros[pos]}`)
}

for(let pos in numeros){
    console.log(`A sequencia dos numeros em for in e : ${numeros[pos]}`)
}

console.log(`Buscando o valores: ${numeros.indexOf(3)}`)
console.log(`Valor invalido de buscador: ${numeros.indexOf(6)}`)