//Preciso ordernar o array de objetos (Livros) do mais barato ao mais caro  (Insertion Sort)
const livro = [{ Livro: "JavaScript", Preco: 25 },
{ Livro: "PHP", Preco: 15 },
{ Livro: "Java", Preco: 30 },
{ Livro: "Elixir", Preco: 50 },
{ Livro: "GO", Preco: 45 },
{ Livro: "Python", Preco: 20 }
]

let insertionSort = (lista) => {
    for (atual = 0; atual < lista.length; atual++) {
        let analise = atual
        while (lista[analise].Preco < lista[analise - 1].Preco){
            let livroAtual=livro[atual]
            let livroMenorPreco=livro[menor]
            livro[atual]=livroMenorPreco
            livro[menor]=livroAtual
        }

    }

}
console.log(insertionSort(livro));