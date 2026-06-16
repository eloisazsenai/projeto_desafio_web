// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formDados')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let num = parseFloat(objformDados.get('num'))
    
    if (((num % 3) == 0) && ((num % 7) == 0)) {
        divResultado.innerHTML = 'É divisível por 3 e 7'
    }else{
        divResultado.innerHTML = 'Não é divisível por 3 e 7'
    }
    
    

    formDados.reset
})