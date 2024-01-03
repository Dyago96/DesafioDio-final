console.log ("Desafio Final");

class heroi{
    constructor(nome, tipo, idade){
        this.nome = nome;
        this.tipo = tipo;
        this.idade = idade;
    }

Atacar (){
    let ataque ="";
    switch(this.tipo){
        case: "mago":
            ataque = "usou magia";
            break;
        case "guerreiro":
            ataque = "usou espada";
            break;
        case "monge":
            ataque = "usou artes marciais";
            break;
        case "ninja":
            ataque = "usou shuriken";
            break;
        default:
            ataque = "usou um ataque genérico";
        }

    console.log (`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
    }
}

// Exemplo de uso
const heroi1 = new heroi ("Aragorn", 30, "guerreiro");
const heroi2 = new heroi ("Gandalf", 1000, "mago");

heroi1.atacar ();
heroi2.atacar ();