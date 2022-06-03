//Exercicio Nota Escolar
// Obter a media a partir de um array.
// 0-59 F
// 60-69 D
// 70-79 C
// 80-89 B
// 90-100 A

let aluno = [99, 90, 90, 80, 90, 75, 100]
console.log(mediaLetrada(aluno))
function mediaLetrada(arr) {
    let acumulador = 0
    for (const i in arr) {
        acumulador += arr[i]
    }
    let media = acumulador / arr.length
    console.log(media)
    if (media <= 59) return "F"
    if (media <= 69) return "D"
    if (media <= 79) return "C"
    if (media <= 89) return "B"
    return "A"
}

