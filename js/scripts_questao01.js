// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let n1 = parseFloat(objformDados.get('num1'))
    let n2 = parseFloat(objformDados.get('num2'))
    let n3 = parseFloat(objformDados.get('num3'))

    let media = (n1 + n2 + n3)/3

    divResultado.innerHTML = `A MEDIA DOS NUMEROS DIGITADOS É ${media.toFixed(2).replace('.',',')}`
    formDados.reset
})