// Criar dois objetos e comparar se são iguais em propiedades.

function Endereco (rua, cidade, cep) {
    this.rua = rua
    this.cidade = cidade
    this.cep = cep
}
const endereco1 = new Endereco("Jose Gomes", "Betim", "887799")
const endereco2 = new Endereco("Jose Gomes", "Betim", "887799")
const endereco3 = new Endereco("Jose Gomes", "Contagem", "887799")

function comparar(end1, end2) {
    if (end1.rua === end2.rua && end1.cidade === end2.cidade && end1.cep === end2.cep) {
        return "Iguais"
    }
    else {
        return "Diferentes"
    }
}
console.log(comparar(endereco1, endereco3))