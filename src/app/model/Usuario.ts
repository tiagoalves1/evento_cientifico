export class Usuario {
    nome: string;
    senha: string;
    id: number;
    siape: string;

    constructor(nome, senha, id, siape){
        this.nome = nome;
        this.senha = senha;
        this.id = id;
        this.siape = siape;
    }
}

