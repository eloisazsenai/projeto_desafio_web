// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formDados')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let codigo = 'ABCD1234'
    let senha = '1234'

    let codigoDigitado = objformDados.get('codigo')
    let senhaDigitada = objformDados.get('senha')

    if (codigo === codigoDigitado && senha === senhaDigitada) {
        divResultado.innerHTML = 'ACESSO PERMITIDO'
    } else {
        divResultado.innerHTML = 'ACESSO NEGADO'
    }

    formDados.reset()
})