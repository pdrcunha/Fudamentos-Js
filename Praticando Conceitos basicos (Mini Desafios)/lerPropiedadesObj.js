// Criar um metodo que leia as propiedades de um objeto, tudo que for string sera impresso
// No caso a propiedade nome e email serão strings
const contatos = {
    Nome: "Pedro",
    Idade: 32,
    Email: "pedro@hotmail.com"
}

imprimeString(contatos)
function imprimeString(arr) {
    for (x in arr) {
        if (typeof arr[x] === 'string') 
        console.log(arr[x])

    }
}