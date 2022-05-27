const cliente={nome:"Andre",
idade:36,
cpf:"123.215.545-78",
email:"andre@email.com"
}

//Adicionando com notaçao de ponto
cliente.fone="995887090"
console.log(cliente)
//Alterando Info
cliente.fone="933529779"
console.log(cliente)

//Deletando Campos
delete cliente.fone
console.log(cliente)