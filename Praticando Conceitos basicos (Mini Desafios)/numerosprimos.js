// Criar uma função ao qual e passado um limite, ela ira correr todos os numeros e retornar somente os primos
// Ex(15)=2,3,5,7,11,13

let primos = (limite) => {
    console.log("Os Numeros Primos dentro de " + limite + " são:")
    for (let i = 2; i < limite; i++) {
        let ePrimo = true
        for (let divisor = 2; divisor < i; divisor++) {
            if (i % divisor === 0) {
                ePrimo = false
                break;
            }
        }
        if (ePrimo) { console.log(i) }

    }
}
primos(100)