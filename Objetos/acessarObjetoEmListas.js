//Dois valores por campo (array como propriedade do objeto)
const cliente = {
    nome: "Andre",
    idade: 36,
    cpf: "123.215.545-78",
    email: "andre@email.com",
    fones: ["555995549", "5959748546"]
}
cliente.fones.forEach(info => console.log(info))