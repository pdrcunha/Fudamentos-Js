//////Criar uma função que troque os valores das variaveis por outro valor escolhido.
let cor = "Vermelho"
let numero = 555
let movel = "Cadeira"
let celuar = "31995887090"

console.log(`Valores originais ${cor}, ${numero}, ${movel} e ${celuar}`)

const troca = (item, novoValor) => {
    item = novoValor
    return item
}






console.log(`Valores novos: ${troca(cor,"Amarelo")}, ${troca(numero, 10)}, ${troca(movel, "Mesa")} e ${troca(celuar, "3133529779")}`)