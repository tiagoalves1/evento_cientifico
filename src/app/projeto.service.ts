import { Injectable } from '@angular/core';
import { Projeto } from 'src/app/model/Projeto';

@Injectable({
  providedIn: 'root'
})
export class ProjetoService {
  projetos:Projeto[] = [];
  constructor() { }

  addProjeto(nome,evento){
    let projeto = new Projeto(nome, evento, this.projetos.length);
    this.projetos.push(projeto);
  }
}
