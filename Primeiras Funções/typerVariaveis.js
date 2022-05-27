//var -- São sempre carregadas no inicio do progama.
// let só sao lidas ápos a linha de declaração.
//const seu valor e constante não pode ser alterado no futuro.
//var altura = 5;
//var comprimento = 7;
//var area = altura * comprimento;
//console.log(area);
//let forma = 'retangulo'
//let altura = 5;
//let comprimento = 7;
//let area;
//if(forma ==='retangulo'){
// area = altura * comprimento;
//} else {
//     area = altura * comprimento/2;
//}
//console.log(area);
const forma = "quadrado";
const altura = 5;
const comprimento = 7;
let area;// Nesse caso não da pra usar const**
;
if (forma === "quadrado"){
 area = altura * comprimento;
}else{
    area = (altura * comprimento)/2;
}
console.log(area)