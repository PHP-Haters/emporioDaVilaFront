import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pagina-gerenciamento',
  imports: [ HeaderComponent, FooterComponent ],
  templateUrl: './pagina-gerenciamento.component.html',
  styleUrl: './pagina-gerenciamento.component.scss'
})
export class PaginaGerenciamentoComponent {

}
