const clientes = [{
    nome: "Andre",
    idade: 36,
    cpf: "123.215.545-78",
    email: "andre@email.com",
    dependentes: [{
        nome: "Sara",
        parentesco: "filha",
        dataNasc: "20/03/2011"
    },
    {
        nome: "Samia Maria",
        parentesco: "filha",
        dataNasc: "21/12/2014"
    },]
},
{
    nome: "Juliana",
    idade: 25,
    cpf: "188.919.545-77",
    email: "juju@email.com",
    dependentes: [{
        nome: "Pedro Cunha",
        parentesco: "filho",
        dataNasc: "20/03/2019"
    },
    {
        nome: "Salaza Potter",
        parentesco: "filho",
        dataNasc: "21/12/2012"
    },]
}
]
//...Operador de esplhamento
const listaDependentes=[...clientes[0].dependentes,...clientes[1].dependentes]
console.log(listaDependentes)