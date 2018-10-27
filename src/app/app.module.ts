import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';
import { LoginusuarioComponent } from './loginusuario/loginusuario.component';
import { CadastroUsuarioComponent } from './cadastro-usuario/cadastro-usuario.component';
import { UsuarioService } from 'src/app/usuario.service';
import { MenuComponent } from './menu/menu.component';
import { CadastroProjetoComponent } from './cadastro-projeto/cadastro-projeto.component';

export const rotas:Routes =[
{path:'login',component:LoginusuarioComponent},
{path:'cadastro', component: CadastroUsuarioComponent},
{path: 'menu', component: MenuComponent},
{path: 'cadastroProjeto', component: CadastroProjetoComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    LoginusuarioComponent,
    CadastroUsuarioComponent,
    MenuComponent,
    CadastroProjetoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(rotas)
  ], 
  providers: [UsuarioService],
  bootstrap: [AppComponent]
})
export class AppModule { }
