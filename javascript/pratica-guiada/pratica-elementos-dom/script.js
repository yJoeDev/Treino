var caixa = document.getElementById('conteudo')
var img = document.createElement('img')
var input = document.createElement('input')
input.setAttribute ('type', 'checkbox')
input.style.margin = '10px'
img.setAttribute('src', 'home_adulto.jpg')
img.style.width = '200px'
img.style.height = '200px'
img.style.display = 'block'
img.style.margin = 'auto'
caixa.style.width = '400px'
caixa.style.height = '400px'
caixa.style.background = 'red'
caixa.style.padding = '10px'
caixa.appendChild(img)
caixa.appendChild(input)