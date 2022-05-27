const nome = ["Ana","Maria","Marcos","Mauro"]
const notas =[ 7,4.5,8,3]

const reprovados = nome.filter((aluno, indice) => notas[indice] < 5)
console.log(reprovados)
