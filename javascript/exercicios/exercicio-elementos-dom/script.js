var botao = document.createElement('button')
botao.setAttribute('onclick', 'mostraIMG()')
botao.innerHTML = 'Click'
botao.style.width = '50px'
botao.style.height =  '30px'
var caixa = document.getElementById('conteudo')
caixa.style.width = '200px'
caixa.style.height = '200px'
caixa.style.background = 'red'
caixa.style.display = 'flex'
caixa.style.justifyContent = 'center'
caixa.style.alignItems = 'flex-start'
caixa.appendChild(botao)
function mostraIMG(){
var img = document.createElement('img')
img.src = 'Fotos-de-perfil.jfif'
img.style.width = '100px'
img.style.width = '100px'
img.style.alignSelf = 'center'
caixa.appendChild(img)
}
