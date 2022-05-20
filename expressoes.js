//Declaração de Função
function XXX(num1, num2){
    return num1 + num2;
}
// expressão de função, ela não tem nome... ela só foi atribuida a uma variavel, e se escreve tudo em uma unica linha
const soma = function(num1, num2){return num1 + num2;}
console.log(soma(2, 2))

//PRINCIPAL DIFERENÇA
console.log(apresentar())
function apresentar(){
    return "Olá";
}
console.log(apresentarEx(2, 2))
var apresentarEx = function(num1, num2){ return num1 + num2;}//Não vai aparecer pois ela trabalha como uma variavel... e const foi definida depois do console LOG