// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formDados')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let distancia = parseFloat(objformDados.get('distancia'))
    let consumoMedio = parseFloat(objformDados.get('consumo'))
    let preco = parseFloat(objformDados.get('precoCombustivel'))


    let gastoCombustivel = distancia * consumoMedio
    let valorCombustivel = preco * gastoCombustivel
    
    divResultado.innerHTML = `A QUANTIDADE DE COMBUSTÍVEL NECESSÁRIA É ${gastoCombustivel.toFixed(1).replace('.',',')}L E O GASTO TOTAL É DE R$${valorCombustivel.toFixed(2).replace('.',',')}`

    formDados.reset
})