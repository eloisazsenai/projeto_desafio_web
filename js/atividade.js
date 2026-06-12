const num = Number(prompt())
let soma = 0

for (let i = 0; i < num; i++) {
    const numeros = Number(prompt(`Digite o número ${i + 1}:`))
    soma += numeros
}

const media = soma / num

console.log(media)