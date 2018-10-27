import { Component, OnInit } from '@angular/core';
import { EventoService } from 'src/app/evento.service';
import { Evento } from 'src/app/model/Evento';
import { Usuario } from 'src/app/model/Usuario';
import { UsuarioService } from 'src/app/usuario.service';
import { ProjetoService } from 'src/app/projeto.service';

@Component({
  selector: 'app-cadastro-projeto',
  templateUrl: './cadastro-projeto.component.html',
  styleUrls: ['./cadastro-projeto.component.css']
})
export class CadastroProjetoComponent implements OnInit {
  eventos: Evento[];
  eventoNome: string;
  nomeProjeto: string;
  siape:string;
  constructor(private eventoS: EventoService, private usuarioS:UsuarioService, private projetoS: ProjetoService) { }

  ngOnInit() {
    this.eventos = this.eventoS.getEvento();
    this.siape = sessionStorage.getItem("siape");
  }
  addProjeto(){
    for(let i = 0 ; i < this.eventos.length; i++){
       if(this.eventos[i].nome == this.eventoNome){
          this.projetoS.addProjeto(this.nomeProjeto, this.eventoNome);
          console.log("a");
          alert("Projeto Cadastrado");
        }
        else{
          alert("Não existe esse evento")
        }
       }
    }

}
