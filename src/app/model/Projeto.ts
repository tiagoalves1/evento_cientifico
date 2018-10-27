import { Usuario } from "src/app/model/Usuario";


export class Projeto{

    nome: string;
    evento: string;
    id: number;

    constructor(nome, evento, id){
        this.nome = nome;
        this.evento = evento;
        this.id = id;
    }
}
