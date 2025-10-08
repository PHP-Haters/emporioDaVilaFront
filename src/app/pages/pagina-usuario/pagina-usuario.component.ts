import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { AuthUtil } from '../../utils/auth.util';

@Component({
  selector: 'app-pagina-usuario',
  imports: [ HeaderComponent, FooterComponent ],
  templateUrl: './pagina-usuario.component.html',
  styleUrl: './pagina-usuario.component.scss'
})
export class PaginaUsuarioComponent implements OnInit{
  userId?: number;

  constructor (private authUtil: AuthUtil) {}

  ngOnInit(): void {
    this.getUserData();
  }

  getUserData() {
    const id = this.authUtil.loggedUserId;
    if (id) {
      this.userId = Number(id);
      console.log(this.userId);
    } else {
      console.warn("Nenhum usuário logado.");
    }
  }

}
