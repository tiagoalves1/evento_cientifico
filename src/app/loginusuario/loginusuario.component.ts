import { Component, OnInit } from '@angular/core';
import { UsuarioService } from 'src/app/usuario.service';
import { Router } from '@angular/router';
import { MenuComponent } from 'src/app/menu/menu.component';


@Component({
  selector: 'app-loginusuario',
  templateUrl: './loginusuario.component.html',
  styleUrls: ['./loginusuario.component.css']
})
export class LoginusuarioComponent implements OnInit {

  siape: string;
  senha: string;

  constructor(private usuarioService: UsuarioService, private router: Router) {

  }

  ngOnInit() {
  }

  login(){
    let usuario = this.usuarioService.getUsuario(this.siape);
    if(usuario == undefined){
      alert("Não existe esse usuário");
    }
    else if(this.senha == usuario.senha){
      sessionStorage.setItem("siape", this.siape);
      this.router.navigate(['menu']);
  }
}
}



