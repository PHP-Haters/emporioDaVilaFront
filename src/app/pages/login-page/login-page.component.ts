import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  imports: [],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {
  usuarioValido = "admin@gmail.com";
  senhaValida = "123456";

  mensagem: string = "";
  sucesso: boolean = false;

  constructor(private router: Router) {}

  login(email: string, senha: string) {
    if (email === this.usuarioValido && senha === this.senhaValida) {
      this.mensagem = "Login realizado com sucesso!";
      this.sucesso = true;

      // 🔹 redireciona para a página inicial após 1 segundo
      setTimeout(() => {
        this.router.navigate(['./pagina-inicial']);
      }, 1000);

    } else {
      this.mensagem = "Email ou senha incorretos!";
      this.sucesso = false;
    }
  }
}
