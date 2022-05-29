//Usando prototipos, aproveitando propiedades.

function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    depositar = function (valor) {
        this.saldo += valor
    }
}
//Criando Novo objeto
const andre=new cliente("Andre","126.685.695-65","peioroe@hotmail.com",100)
console.log(andre)
const pedro=new cliente("pedro","151.555.666.99","pedeojeroj@gmail.com",100)
listacliente=[andre,pedro]
console.log(listacliente)