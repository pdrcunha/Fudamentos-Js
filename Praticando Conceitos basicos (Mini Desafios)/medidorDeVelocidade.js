///Velocidade maxima 60 Km (acima de 60 avisar)
/// A cada 5 km acima do limite ganha um ponto na carteira mais a multa.
/// Caso pontos > 12 é emitido carteira suspensa.

const km = 60;

radar = (velocidade) => {
    let texto = ""
    let limiteVelocidade = 60;
    let limitePontos = 12
    let pontos = 0;
    if (velocidade > limiteVelocidade) {texto = "Tomou multa por excesso de velocidade"}else{texto = "Parabens!!"}
    const sobreVelocidade = velocidade - limiteVelocidade
    pontos =Math.floor((sobreVelocidade / 5)) 
    if(pontos > 0) {texto += ` ,Tomou ${pontos} na carteira`}
    if(pontos > limitePontos) { texto += " ,Perdeu a carteira"}
    console.log(texto)
}
radar(km)