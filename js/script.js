console.log('Hello, wolrd!')

console.log('pão') 

//CRIANDO VARIÁVEIS

let num = 50 //variavel local
var num2 = 180 //varialvel global
const num3 = 450 // variavel constante, valor imuável

console.log(num)
console.log(num2)
console.log(num3)

if (true){
    let num4 = 420 //variavel local
    var num5 = 180 //varialvel global
    
    console.log(num4)
}

console.log(num5)

//CONCATENAÇÃO

console.log('Valor de num ' + num)
console.log('Valor de num3 ', num3)
console.log(`Valor de num2 ${num2}`) //concatenação template
console.log('A soma dos números ' + 15 + 8)
console.log(`A soma dos numeros ${15 + 8}`)
console.log('A soma dos numeros', 15 + 8)
console.log('A soma dos numeros ' + num + num2)
console.log('A soma dos numeros ' + (num + num2))
console.log('A soma dos numeros ', num + num2)
console.log(`A soma dos numeros ${num + num2}`)

//OPERADORES MATEMATICOS

/*
    SOMA (+)
    SUBTRAÇÃO (-)
    MULTIPLICAÇÃO (*)
    DIVISÃO ( / )
    RESTO DA DIVISÃO/MODULO (%)
*/

//OPERADORES RELACIONAIS
/*
    IGUAL (==)
    MAIOR QUE(>)
    MENOR QUE (<)
    MAIOR IGUAL (>=)
    MENOR IGUAL (<+)
    DIFERENTE (!=)
*/

//OPERADORES LOGICOS
/*
    E/AND (&&)
    OU/OR (||)
*/

console.log('TESTE RELACIONAIS', 10 == 5)
console.log('TESTE RELACIONAIS', 10 != 5)
console.log('TESTE RELACIONAIS', 10 < 5)
console.log('TESTE RELACIONAIS', 10 > 5)
console.log('TESTE LOGICO', (10 > 5) && (15 < 8))
console.log('TESTE LOGICO', (10 > 5) || (15 < 8))

//TESTE LOGICO

let idade = 25

if(idade >= 18){
    console.log('Maior de idade')
}else{
    console.log('Menor de idade')
}

/**
 * MENOR QUE 18 = NÃO PERMITIDO
 * RENOVAÇÃO DE CNH
 * 18 ATÉ 49 = 10 ANOS
 * 50 ATÉ 69 = 5 ANOS
 * 70 ACIMA = 3 ANOS
 */

if(idade < 18){
    console.log(`COM A IDADE DE ${idade}, NÃO É PERMITIDO TER CNH`)
}else if(idade <50){
    console.log(`COM IDADE DE ${idade}, 10 anos para renovar`)
}else if(idade < 70){
    console.log(`COM IDADE DE ${idade}, 5 anos para renovar`)
}else{
    console.log(`COM IDADE DE ${idade}, 3 anos para renovar`)
}