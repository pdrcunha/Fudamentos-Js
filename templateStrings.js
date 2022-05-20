const nome = "Pedro";
const idade = 2021-1966;
const cidadeDeNascimento= "MG";
//Forma "Demorada" sem template
const apresentacao = "Meu nome é " + nome + ", minha idade é " + idade + " e Nasci em " + cidadeDeNascimento;
console.log(apresentacao)
//Forma com Template de Strings (Tem que ser entre crase e não aspas `XX` e se usa ${} para a variavel.)
const template = `Meu nome é ${nome}, Minha idade é ${idade} e nasci em ${cidadeDeNascimento}`;
console.log(template)