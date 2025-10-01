import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthUtil } from '../../utils/auth.util';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-login-page',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {  

  mensagem: string = "";
  sucesso: boolean = false;
  usuarioLogado: Usuario = new Usuario;

  constructor(private router: Router, private authUtil: AuthUtil, private usuarioService: UsuarioService) {}

  login(event: Event, email: string, senha: string) {
    event.preventDefault();
   const usuario: Usuario = new Usuario(); // cria instância de Produto
   
   usuario.email = email;
   usuario.senha = senha;
   const answer = this.usuarioService.login(usuario).subscribe({
    next:  (user) => {
        this.usuarioLogado = user;
        this.authUtil.login(this.usuarioLogado);
    }
   });
  //todo

    // if (email === this.usuarioPadrao && senha === this.senhaPadrao) {
    //   this.mensagem = "Login realizado com sucesso!";
    //   this.sucesso = true;
    //   this.authService.login(); // Atualiza estado global do login

    //   // redireciona para a página inicial após 1 segundo
    //   setTimeout(() => {
    //     this.router.navigate(['inicio']);
    //   }, 1500);

    // } else {
    //   this.mensagem = "Email ou senha incorretos!";
    //   this.sucesso = false;
    // }
  }
}
