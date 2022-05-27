//Ele e basicamente um If, mas tem uma maneira especial de ser feito... ele faz tudo em uma unica linha
// Sistema bebida maior de 18
const idadeMinima = 18;
const idadeCliente = 16;
//Usando o IF
if (idadeCliente>=idadeMinima){
    console.log("cerveja")
} else {
    console.log("Suco")
}
//Usando o operador ternario (xxxx OPERADO LOGICO xxxx ? RESPOSTA VERDADEIRA : RESPOSTA FALSA)
console.log(idadeCliente >= idadeMinima ? "cerveja" : "suco")