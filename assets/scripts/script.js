/*
podemos chamar um método por id: getElementById(), por tag: getElementByTagName(),
por nome: getElementsByName(), por classe: getElementByClassName(), e por seletor: querySelector()

JavaScript é uma linguagem Case Sensitive, isso é, que reconhece letras maiúsculas e minúsculas.
*/

let nome = window.document.getElementById('nome') //colocando # neste, ele não funciona //
let email = document.querySelector('#email') // esquecendo de colocar # aqui, também não funciona //
let assunto = document.querySelector('#assunto')
let nomeOk = false
let emailOk = false
let assuntoOk = false
let mapa = document.querySelector('#mapa')

nome.style.width = '100%'
email.style.width = '100%'

function validaNome() {
    let txtNome = document.querySelector('#textoNome')
    if (nome.value.length < 3) {
        txtNome.innerHTML = 'Nome Inválido!!!'
        txtNome.style.color = 'red'
    } else {
        txtNome.innerHTML = 'Agora sim :)'
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validaEmail() {
    let txtEmail = document.querySelector('#textoEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1) {
        txtEmail.innerHTML = 'E-mail inválido!!!'
        txtEmail.style.color = 'red'
    } else {
        txtEmail.innerHTML = 'Dessa vez passa :D'
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaAssunto() {
    let txtAssunto = document.querySelector('#textoAssunto')

    if (assunto.value.length >= 100) {
        txtAssunto.innerHTML = 'O texto digitado é muito grande. Por gentileza, digite no máximo, 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
        assuntoOk = false
    } else {
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert ('Prontinho, agora só aguardar meu retorno :D')
    } else {
        alert ('Preencha todos os campos corretamente')
    }
}

function mapaZoom() {
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal () {
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}