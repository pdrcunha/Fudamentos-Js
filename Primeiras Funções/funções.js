//O java lê linha por linha em sequencia, para quebrar isso usamos a functio x ()
let x = "";
console.log(x)
x = "oi"
// Primeiro momento você declara 
function imprimeTexto(texto){
    console.log(texto)
}
//Segundo momento e quando você chama ela
imprimeTexto("Oi");
imprimeTexto("Segundo Texto");
// Existem 3 Formas de escrever funções.// essa é a primeira.
function soma(){
    return 2+2;
}
imprimeTexto(soma())