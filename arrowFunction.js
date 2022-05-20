// Classica
function apresentarClassica(nome){
    return "Meu nome é " + nome;
}
console.log(apresentarClassica("Classica"))
//Expreção
const apresentarEX = function(nome){return "Meu nome é " + nome}
console.log(apresentarEX("Expreção"))
// !!!!!!!!!!! arrow => elá nao e nomeada tambem e colocada em uma variavel
const apresentarArrow = nome => "Meu nome é " + nome
console.log(apresentarArrow("Arrow"))
//// Arrow com mais de uma linha de codigo
const somaNumero = (num1, num2) => {
    if (num1 > 10 || num2 > 10){
        return "Somente Numeros de 1 a 9";
    } else {
        return num1 + num2;
    }
}
console.log(somaNumero(2, 8))
