import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthUtil } from '../../utils/auth.util';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Usuario } from '../../model/usuario.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-pagina-usuario',
  imports: [ HeaderComponent, FooterComponent, FormsModule ],
  templateUrl: './pagina-usuario.component.html',
  styleUrl: './pagina-usuario.component.scss'
})
export class PaginaUsuarioComponent implements OnInit {
  currentUserId?: number;
  loggedUser!: Usuario;
  showPassword = false; // controla o estado do input
  telefone: string = '';

  constructor(
    private authUtil: AuthUtil,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    const id = this.authUtil.loggedUserId;
    this.currentUserId = Number(id);

    this.usuarioService.getUsuarioById(this.currentUserId).subscribe({
      next: (usuario) => {
        console.log(usuario);
      },
    });
  }

  togglePassword(input: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    input.type = this.showPassword ? 'text' : 'password';
  }

  formatTelefone(event: Event) {
    const input = event.target as HTMLInputElement;
    let digits = input.value.replace(/\D/g, ''); // remove tudo que não é número

    // limita a 11 dígitos
    if (digits.length > 11) digits = digits.substring(0, 11);

    if (digits.length > 6) {
      input.value = `(${digits.substring(0, 2)}) ${digits.substring(
        2,
        digits.length - 4
      )}-${digits.substring(digits.length - 4)}`;
    } else if (digits.length > 2) {
      input.value = `(${digits.substring(0, 2)}) ${digits.substring(2)}`;
    } else if (digits.length > 0) {
      input.value = `(${digits}`;
    }
  }

}
