//Conferir cada valor do array e retornar se e par ou impar 
const valores = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 22, 33, 55, 68745, 65598, 11456, 5574, 2225, 4589, 58741, 2321, 5, 654]

const verificacao = (arr) => {
    for (let x in arr) {
        arr[x] % 2 === 0 ? console.log(`O numero ${arr[x]} e par!`) : console.log(`O numero ${arr[x]} e impar!`);
    }
}
verificacao(valores)