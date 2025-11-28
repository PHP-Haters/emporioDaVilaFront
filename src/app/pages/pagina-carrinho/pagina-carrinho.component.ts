import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pagina-carrinho',
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './pagina-carrinho.component.html',
  styleUrl: './pagina-carrinho.component.scss'
})
export class PaginaCarrinhoComponent {

}
