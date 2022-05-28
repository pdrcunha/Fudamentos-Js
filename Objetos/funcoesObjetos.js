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
    saldo:100,
    depositar:function (valor){
        this.saldo+=valor
    }
}
console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)