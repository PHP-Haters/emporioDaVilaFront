import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthUtil } from '../../utils/auth.util';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Usuario } from '../../model/usuario.model';
import { FormsModule } from '@angular/forms';
import Swal from 'sweetalert2';

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
        this.loggedUser = usuario;
      },
    });
  }

  togglePassword(input: HTMLInputElement) {
    this.showPassword = !this.showPassword;
    input.type = this.showPassword ? 'text' : 'password';
  }

  atualizarUsuario() {
    this.usuarioService.editarUsuario(this.loggedUser).subscribe({
      next: (response) => {
        Swal.fire('Successo!', response, 'success');
      }
    });
  }
}
