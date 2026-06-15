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

    divResultado.innerHTML = `A ÁREA TOTAL É ${areaTotal.toFixed(1).replace('.',',')}m²`
    formDados.reset
})