// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formDados')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let nota1 = parseFloat(objformDados.get('nota1'))
    let nota2 = parseFloat(objformDados.get('nota2'))
    let nota3 = parseFloat(objformDados.get('nota3'))


    let media = (nota1 + nota2 + nota3) / 3
    
    if(media >= 6){
        divResultado.innerHTML = 'Aprovado!'
    }else{
        divResultado.innerHTML = 'Reprovado!'
    }
    

    formDados.reset
})