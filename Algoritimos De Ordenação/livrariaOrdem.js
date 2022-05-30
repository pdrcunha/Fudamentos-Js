//Preciso ordernar o array de objetos (Livros) do mais barato ao mais caro
const livro = [{ Livro: "JavaScript", Preco: 25 },
{ Livro: "PHP", Preco: 15 },
{ Livro: "Java", Preco: 30 },
{ Livro: "Elixir", Preco: 50 },
{ Livro: "GO", Preco: 45 },
{ Livro: "Python", Preco: 20 }
]
let menorValor = (arrLivros, posInicial) => {
    let maisBarato = posInicial;
    for (let atual = posInicial; atual < arrLivros.length; atual++) {
        if (arrLivros[atual].Preco < arrLivros[maisBarato].Preco) {
            maisBarato = atual
        }

    }
    return maisBarato
}
for (let atual = 0; atual < livro.length; atual++) {
    let menor = menorValor(livro, atual)
    let livroAtual=livro[atual]
    let livroMenorPreco=livro[menor]
    livro[atual]=livroMenorPreco
    livro[menor]=livroAtual
}
console.log(livro)