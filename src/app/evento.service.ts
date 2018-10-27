import { Injectable } from '@angular/core';
import { Evento } from 'src/app/model/Evento';

@Injectable({
  providedIn: 'root'
})
export class EventoService {
  eventos: Evento[]=[
    {nome: "Linguagem", id: 0},
    {nome: "Gabriel Rei do Gado", id: 1},
    {nome: "Damicismo", id: 2}
  ];

 constructor() { }
 
 getEvento(){
   return this.eventos;
 }
}
