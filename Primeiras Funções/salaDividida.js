//Divisão de Arrays slice()
const nomes = ['Pedro','João','Lorena','Natalia',"Jeff",'Oralda','Marcos','Helo','Brenda','Careca']
let sala1= nomes.slice(0,nomes.length/2);
let sala2= nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1 ${sala1} e alunos sala 2 ${sala2}.`)
//Alteração de Arrays splice()
nomes.splice(1,2,'RODRIGO')//Trocar o 2 e o 3 indice por Rodrigo ----- Posso só retirar usando nomes.splice(1,2)
//Adicionando um novo elemento em qualquer posição
nomes.splice(3,0,'LOENE')// Assim coloco um elemento novo usando o parametro 0, vai ser posto antes do indice 3 da lista já atualizada
sala1= nomes.slice(0,nomes.length/2)//Precisei dividir de novo para atualisar as listas
sala2= nomes.slice(nomes.length/2);
console.log(`ATUALIZADA as lista de Alunos da sala 1 ${sala1} e alunos sala 2 ${sala2}.`)


