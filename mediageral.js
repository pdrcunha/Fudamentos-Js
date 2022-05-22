//Calculando a media de 3 arrays diferentes com reduce

const salaJs=[7,8,5,9]
const salaJava=[5,1,9,7]
const salaPython=[4,10,9,8]

function mediaSala(notasDaSala){
    const somaDasNotas = notasDaSala.reduce((acumulador,atual)=>
    atual + acumulador,0)
    return somaDasNotas/notasDaSala.length
}

console.log(`Média da sala JS ${mediaSala(salaJs)},
Média da sala Java ${mediaSala(salaJava)},Média da sala Pysthon ${mediaSala(salaPython)}`)