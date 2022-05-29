function cliente(nome, cpf, email, saldo) {
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function (valor) {
        this.saldo += valor
    }
}
//usando parametros do outro prototipo com a função call
function poup(nome, cpf, email,saldo, saldoPuop) {
    cliente.call(this,nome,cpf,email,saldo)
    this.saldoPuop=saldoPuop
} 
const lorena=new poup("Lorena","99999999999999","lolo@jdifj.com",90,800)
lorena.depositar(10)
console.log(lorena)
//Adcionando novo parametro no modelo de cima (depositar Poupança)
poup.prototype.depositarPoup=function(valor){
    this.saldoPuop+=valor
}
lorena.depositarPoup(100)
console.log(lorena.saldoPuop)