const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123.215.545-78",
    email: "andre@email.com",
}

//Adcionando um objeto dentro de outro objeto
cliente.dependentes = {
    nome: "Sara",
    parentesco: "filha",
    dataNasc: "20/03/2011"
}
console.log(cliente)

//Fazendo alteração dentro do objeto dependenstes propredade nome
cliente.dependentes.nome = "Sara Silva"
console.log(cliente)