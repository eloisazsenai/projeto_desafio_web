// PEGANDO ELEMENTOS DO DOM

const formDados = document.querySelector('#formulario-pessoa')
const divResultado = document.querySelector('#div-dados')

// CAPTANDO O EVENTO SUBMIT DO FORMULÁRIO

formDados.addEventListener('submit', (evt)=>{
    evt.preventDefault()

    const objformDados = new FormData(formDados)

    let nome = objformDados.get('nome')
    let idade = objformDados.get('idade')

    let situacaoIdade = ''

    if(idade >= 18){
        situacaoIdade = `${nome}, você é maior de idade`
    }else{
        situacaoIdade = `${nome}, você é menor de idade`
    }

    divResultado.innerHTML = situacaoIdade

})