//ForEach só executa o bloco não retorna nada
const notas= [10,6.5,8,7.5];
let somaDasNotas = 0
for(let i = 0; i < notas.length; i++){
    somaDasNotas += notas[i]
}
let media = somaDasNotas/notas.length
console.log(somaDasNotas)
console.log(media)

//Usando o ForEach= para cada  e uma versão nova do FOR
somaDasNotas=0// Só pra zerar a soma
notas.forEach(nota => {// e uma função de callback
    somaDasNotas += nota
})
console.log(somaDasNotas)