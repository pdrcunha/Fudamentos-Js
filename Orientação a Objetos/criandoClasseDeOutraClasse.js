//Herdando metodos e atributos de outra classe usando o extends e o super
function Cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}
class ClientePoup extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoup){
        super(nome,email,cpf,saldo)
        this.saldoPoup=saldoPoup
    }
    depositarPoup(valor){
        this.saldoPoup+=valor
    }
}
const andre = new Cliente("Andre", "126.685.695-65", "peioroe@hotmail.com", 100)
const pedro=new ClientePoup("pedro","151.555.666.99","pedeojeroj@gmail.com",100,900)
console.log(pedro)
pedro.depositarPoup(200)
console.log(pedro.saldoPoup)