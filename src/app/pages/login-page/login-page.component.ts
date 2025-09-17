import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login-page',
  imports: [ FormsModule, CommonModule ],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  usuarioPadrao = "admin@gmail.com";
  senhaPadrao = "admin";

  mensagem: string = "";
  sucesso: boolean = false;

  constructor(private router: Router) {}

  login(event: Event, email: string, senha: string) {
    event.preventDefault();

    if (email === this.usuarioPadrao && senha === this.senhaPadrao) {
      this.mensagem = "Login realizado com sucesso!";
      this.sucesso = true;

      // 🔹 redireciona para a página inicial após 1 segundo
      setTimeout(() => {
        this.router.navigate(['index']);
      }, 1000);

    } else {
      this.mensagem = "Email ou senha incorretos!";
      this.sucesso = false;
    }
  }
}
