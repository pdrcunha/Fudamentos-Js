// Criar Função que exibe * que aquela linha possui (1*)(2**)(3***)


exibirAsteriscos(10)
function exibirAsteriscos(linhas) {
    let padrao = ""
    for (let cont = 1; cont <= linhas; cont++) {
        padrao += "*"
        console.log(cont + " " + padrao)

    }

}

