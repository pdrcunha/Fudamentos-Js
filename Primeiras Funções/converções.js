// tipo de dados
// boleanos

//conversão implícita
// == --> faz comparaçao de valor no caso converteu o numero em string
const numero = 456;
const numeroString = "456";
console.log(numero==numeroString);
console.log(numeroString+numero);//Virou concatenação... não converteu.
//conversão explícita
//Number() e String()
console.log(numero+Number(numeroString));