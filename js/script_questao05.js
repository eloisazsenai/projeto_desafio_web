// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formDados')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let lado1 = parseFloat(objformDados.get('lado1'))
    let lado2 = parseFloat(objformDados.get('lado2'))
    let lado3 = parseFloat(objformDados.get('lado3'))
    
    if ((lado1 == lado2) && (lado1 == lado3)) {
        divResultado.innerHTML = 'Equilátero';
    } else if ((lado1 == lado2) || (lado1 == lado3) || (lado2 == lado3)) {
        divResultado.innerHTML = 'Isósceles';
    } else {
        divResultado.innerHTML = 'Escaleno';
    }
    

    formDados.reset
})