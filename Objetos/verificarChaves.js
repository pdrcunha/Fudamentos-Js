const cliente = {
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
    }],
    //Chamando uma função dentro do objeto
    saldo: 100,
    depositar: function (valor) {
        this.saldo += valor
    }
}

//Convertendo objetos em arrays
function oferecerSeguro(obj) {
    const propClientes = Object.keys(obj)
    if (propClientes.includes('dependentes')) {
        console.log("Oferta de seguro de vida para " + obj.nome)
    }
}

oferecerSeguro(cliente)
console.log(Object.entries(cliente))
console.log(Object.values(cliente))
