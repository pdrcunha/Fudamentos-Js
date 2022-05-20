//Parâmetros de Função 
/////////////(esses são os parametros)
function soma(num1, num2){
    return num1+num2;
}
console.log(soma(2, 2))
//Parâmetros X Argumentos
// Parâmetros tem uma ordem ( Primeiro , Segund , Terceiro)
 function nomeIdade(nome, idade){
     return `Meu nome é ${nome} e minha idade é ${idade}`;
 }
 console.log(nomeIdade("Pedro",91))
//Foi definido um parametro inicial, que pode ser alterado na hora de chamar a função
function mutiplica(num1 = 1, num2 = 1){
    return num1 * num2
}
console.log(mutiplica(soma(2, 2), 5));