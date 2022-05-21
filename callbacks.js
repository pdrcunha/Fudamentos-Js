const nomes = ["ana","pedro","maria","joana"]
function impimeNomes(nome){
    console.log(nome)
}

//O forEach só funciona se passar uma function o forEach tambem pode pegar o Indice (segundo parâmetro)
nomes.forEach(impimeNomes)