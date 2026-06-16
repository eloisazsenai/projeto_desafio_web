// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let largura = parseFloat(objformDados.get('largura'))
    let altura = parseFloat(objformDados.get('altura'))

    let areaTotal = largura * altura
    let qtdTinta = areaTotal / 2

    divResultado.innerHTML = `A ÁREA TOTAL É ${areaTotal.toFixed(1).replace('.',',')}m² e q quantidade e tinta necessária é ${qtdTinta.toFixed(1).replace('.', ',')}`
    formDados.reset
})