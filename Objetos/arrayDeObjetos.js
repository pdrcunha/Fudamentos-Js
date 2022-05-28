const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123.215.545-78",
    email: "andre@email.com",
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    }]
}
//Adicionando objeto no array usando push
cliente.dependentes.push({
    nome: "Samia Maria",
    parentesco: "filha",
    dataNasc: "21/12/2014"
})
console.log(cliente)

//Buscando o dependente mais novo fazendo um filtro
const filhaNova=cliente.dependentes.filter(dependente=> dependente.dataNasc==="21/12/2014")
console.log("A mais nova é "+filhaNova[0].nome)