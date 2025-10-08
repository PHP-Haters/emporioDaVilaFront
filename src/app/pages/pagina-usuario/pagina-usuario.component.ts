import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthUtil } from '../../utils/auth.util';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-pagina-usuario',
  imports: [ HeaderComponent, FooterComponent ],
  templateUrl: './pagina-usuario.component.html',
  styleUrl: './pagina-usuario.component.scss'
})
export class PaginaUsuarioComponent implements OnInit{
  currentUserId?: number;
  loggedUser!: Usuario;

  constructor (private authUtil: AuthUtil, private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    // Getting user Id
    const id = this.authUtil.loggedUserId;
    this.currentUserId = Number(id);

    // Bringing user data from backend
    this.usuarioService.getUsuarioById(this.currentUserId).subscribe({
      next: (usuario) => {
        console.log(usuario);
      }
    });
  }

}
