const cliente={nome:"Andre",
idade:36,
cpf:"123.215.545-78",
email:"andre@email.com"
}
//Printando o valor de uma chave com notação de ponto
console.log(cliente.nome)
// Printando com String literar
console.log(`Meu nome é ${cliente.nome} e tenho ${cliente.idade} anos`)
// Função de string tambem funciona, exibindo só os 3 primeiros numeros com substring
console.log(cliente.cpf.substring(0,3))

