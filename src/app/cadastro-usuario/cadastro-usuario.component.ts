import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-usuario',
  templateUrl: './cadastro-usuario.component.html',
  styleUrls: ['./cadastro-usuario.component.css']
})
export class CadastroUsuarioComponent implements OnInit {
  nome: string;
  siape: string;
  senha: string;

  constructor(private usuarioService: UsuarioService, private router: Router) { 

  }

  ngOnInit() {
  }

  cadastro(){
    if(this.nome == undefined && this.senha == undefined && this.siape == undefined){
      alert("Prencha todo os campos");
    }
    else if(this.usuarioService.getUsuario(this.siape)== null){
      this.usuarioService.addUsuario(this.nome, this.siape, this.senha);
      this.router.navigate(['login']);
    }
  }
}
