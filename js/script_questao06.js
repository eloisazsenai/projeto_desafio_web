// PEGANDO ELEMENTOS DO DOM
const formDados = document.querySelector('#formDados')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO
formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let altura = parseFloat(objformDados.get('altura'))
    let peso = parseFloat(objformDados.get('peso'))

    let imc = parseFloat(peso / (altura ** 2))

    condicaoImc = ''
    
    if (imc < 20) {
        condicaoImc = 'abaixo do peso';
    } else if ((imc > 20) && (imc < 25)) {
        condicaoImc = 'normal';
    } else if ((imc > 25) && (imc < 30)){
        condicaoImc = 'excesso de peso';
    }else if((imc > 30)&&(imc < 35)){
        condicaoImc = 'obesidade'
    }else if(imc > 35){
        condicaoImc = 'obesidade morbida'
    }
    
    divResultado.innerHTML = condicaoImc

    formDados.reset
})