//Preciso achar o livro mais barato da lista.
const livro = [{ Livro: "JavaScript", Preco: 25 },
{ Livro: "PHP", Preco: 15 },
{ Livro: "Java", Preco: 25 },
{ Livro: "Elixir", Preco: 50 },
{ Livro: "GO", Preco: 45 },
{ Livro: "Python", Preco: 20 }
]
let maisBarato = 0;
for (let atual = 0; atual < livro.length; atual++) {
    if (livro[atual].Preco < livro[maisBarato].Preco) {
        maisBarato = atual
    }
 
}
console.log(livro[maisBarato]["Livro"])
