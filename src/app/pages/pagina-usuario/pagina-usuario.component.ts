import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pagina-usuario',
  imports: [ HeaderComponent, FooterComponent ],
  templateUrl: './pagina-usuario.component.html',
  styleUrl: './pagina-usuario.component.scss'
})
export class PaginaUsuarioComponent {

}
