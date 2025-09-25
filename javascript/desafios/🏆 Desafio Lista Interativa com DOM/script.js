var caixa = document.getElementById('caixa')
function adicionar(){
var txtd = document.getElementById('txtd')
var li = document.createElement('li')
var ul = document.getElementById('lista')
if(txtd.value.length == 0){
    window.alert('Digite algo para adicionar a lista')
} else {
    li.textContent = `${txtd.value}`
    ul.appendChild(li)
}
}
