///Busca de elementos no array e confirmação de elementos
// .icludes==>Ele faz uma busca por valor a partir de um idice só retorna Boleano
//indexOf==> Ele traz o numero de indice fazendo uma pesquisa pelo valor. Retorna o valor ..o valor do indice.

let salaDePython=['Oralda','Marcos','Helo','Brenda'];
let medias= [10,5,9,6]; 
let listaNotasAluno=[salaDePython,medias];
function exibeNomeNota(nomeAluno){
    if (listaNotasAluno[0].includes(nomeAluno)){
        indice = listaNotasAluno[0].indexOf(nomeAluno)
        return  listaNotasAluno[0][indice] + " Sua média é " +
        listaNotasAluno[1][indice]
    }else{
        return "Aluno não Cadastrado"
    }
}
console.log(exibeNomeNota('Marcos'))