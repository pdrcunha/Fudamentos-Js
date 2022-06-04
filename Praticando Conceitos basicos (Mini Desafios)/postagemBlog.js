//Criar um objeto postagem de blog com as seguintes informaçoes 
// titulo, menssagem, autor, vizualizaçoes, comentarios (autor e menssagem), esta ao vivo
function Postagem(titulo, menssagem, autor, vizualizaçoes, comentarios, autorComentario, menssagemComentario,estaAoVivo){
    this.titulo=titulo;
    this.menssagem=menssagem;
    this.autor=autor
    this.vizualizaçoes=vizualizaçoes
    this.blocoComentarios=comentarios={autorComentario,menssagemComentario}
    this.estaAoVivo=estaAoVivo
}

let postagem1=new Postagem(
    "Bem Vindo",
    "Olá Mundo",
    "Pedro Cunha",
    17,
    1,
    "Juju",
    "Gostei",
    true
)

console.log(postagem1)