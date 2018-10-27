import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/model/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  usuarios: Usuario[] = [];

  addUsuario(nome, senha, siape){
    let usuario = new Usuario(nome, senha, this.usuarios.length, siape);
    this.usuarios.push(usuario);
    console.log(this.usuarios.length);
  }
  getUsuario(siape){
    for(let i= 0;  i<this.usuarios.length; i++){
      if(this.usuarios[i].siape == siape){
        return this.usuarios[i];
      }
    }
  }

  constructor() { }
}