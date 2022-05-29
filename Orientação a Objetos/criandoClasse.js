//Criando um padrao de objeto com Class e Construtor
class Cliente {
    constructor(nome, email, cpf, saldo) {
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }
    depositar(valor) {
        this.saldo += valor
    }
    exibirValor() {
        console.log(this.saldo)
    }
}
const andre = new Cliente("Andre", "126.685.695-65", "peioroe@hotmail.com", 100)
console.log(andre)
andre.depositar(10)
andre.exibirValor()