// Criando usuarios para um plataforma de curso, onde temos os ADMINs, PROFESSORES, AlUNOS

class User {
    #nome
    #email
    #nascimento
    #role
    #ativo
    constructor(nome, email, nascimento, role, ativo = true) {
        this.#nome = nome //Atributo Privado, Só e possivel alterar, exibir dentro do escopo do objeto.
        this.#email = email
        this.#nascimento = nascimento
        this.#role = role || "Estudante"
        this.#ativo = ativo
    }
    get nome() { // metodo Get nunca recebe argumento somente retorna, são usadas para leitura de metodos/propiedade privados
        return this.#nome//Boa pratica e fazer um get para cada retorno de propiedade.
    }
    get email() {
        return this.#email
    }
    get nascimento() {
        return this.#nascimento
    }
    get role() {
        return this.#role
    }
    get ativo() {
        return this.#ativo
    }
    set nome(novoNome) { // Metodo set sempre recebe argumento, usado para acesso e troca de metodos/propiedades privadas.
        if (novoNome === "") { 
            throw new Error("Nome Vazio")
        } else {
            this.#nome = novoNome
        }

    }
    novoStatus(novoStatus) {//Já que a propiedade atibo e privada... assim para trocar o ativo, pois a função esta dentro do objeto
        this.#ativo = novoStatus
    }
    exibirInfos() {
        console.log(`${this.nome},${this.email},${this.role}`)
    }
}
class Admins extends User {
    criarCurso() {
        console.log("Curso Criado")
    }
}
class Professores extends User {
    aprovaEstudante() {
        console.log("Está aprovado")
    }
}

//TESTES
const novoUser = new User("Pedro", "p@p.com", "21/12/1996")
const novoAdmin = new Admins("Dono", "d@d.com", "22/12/1963", "ADMMIN")
const novoProf = new Professores("JUJU", "j@j.com", "22/11/1987", "Prof")
novoUser.nome = "LOLO"//A chamada do set e como uma propiedade de objeto
console.log(novoUser.nome)// A chamada do get tambem.
novoAdmin.exibirInfos()