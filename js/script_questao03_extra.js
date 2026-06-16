// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formDados')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt) => {
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let produto = objformDados.get('produto')
    let valorCompra = parseFloat(objformDados.get('valorCompra'))

    let lucro = parseFloat('')

    if(valorCompra < 10){
        lucro = valorCompra * 0.7
    }else if((valorCompra > 10) && (valorCompra <30)){
        lucro = valorCompra * 0.5
    }else if((valorCompra < 30) && (valorCompra < 50)){
        lucro = valorCompra * 0.4
    }else if(valorCompra > 50){
        lucro = valorCompra * 0.3
    }

    divResultado.innerHTML = `O lucro da venda do produto ${produto} foi R$${lucro}`

    formDados.reset()
})