//Numero divisivel por 3 Fizz
//Numero divisivel por 5 Buzz
//Divisivel por 3 e 5 FizzBuzz
//Caso contrario retorna o mesmo valor
//Caso não e um numero ... avisar

const numero = resultado(15)

function resultado(dividendo) {
    if (typeof dividendo !== "number") { return "Isso não é um numero" }
    if (dividendo % 3 === 0 && dividendo % 5 === 0) { return 'FizzBuzz' }
    if (dividendo % 3 === 0) { return 'Fizz' }
    if (dividendo % 5 === 0) { return 'Buzz' }
    else { return dividendo }
}

console.log(numero)