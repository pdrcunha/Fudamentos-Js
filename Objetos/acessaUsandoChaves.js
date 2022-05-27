const cliente={nome:"Andre",
idade:36,
cpf:"123.215.545-78",
email:"andre@email.com"
}
//Passando o valor com arrays usando chaves
const chave1=["nome", "idade", "cpf", "email"]
console.log(cliente[chave1[2]])
// Passando o valor com variavel usando chaves
const chave2="nome"
console.log(cliente[chave2])
//Usando o ForEach
chave1.forEach(info=>console.log(cliente[info]))