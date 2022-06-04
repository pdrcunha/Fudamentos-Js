//Filtrar preço de um array de objetos
const itens = [{
    item: "Cadeira 1",
    preco: 1500
},
{
    item: "Cadeira 2",
    preco: 1000
},
{
    item: "Cadeira 3",
    preco: 2000
},
{
    item: "Cadeira 4",
    preco: 1200
},
]

function filtro(arr, valorMin = 0, valorMax) {
    for (const i in arr) {
        if (arr[i].preco >= valorMin && arr[i].preco <= valorMax) {
            console.log(arr[i])
        }
    }
}

filtro(itens,1000,1200)