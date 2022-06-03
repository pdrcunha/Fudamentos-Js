//restorna todo os multiplos de 3 e 5 ate chegar em determinado numero
// Por Fim deve somar todos eles

somar = (limite, divisor) => {
    let newArr = []
    let acumulador = 0
    for (let i = 0; i < limite+1; i++) {
        if (i % divisor === 0) {
            acumulador += i
        }
        newArr.push(i)
    }
    console.log(newArr)
    console.log(acumulador)
}
somar(10, 5)
