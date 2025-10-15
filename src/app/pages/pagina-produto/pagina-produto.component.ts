import { Component } from '@angular/core';
import { FooterComponent } from "../../components/footer/footer.component";
import { HeaderComponent } from "../../components/header/header.component";

@Component({
  selector: 'app-pagina-produto',
  imports: [FooterComponent, HeaderComponent],
  templateUrl: './pagina-produto.component.html',
  styleUrl: './pagina-produto.component.scss'
})
export class PaginaProdutoComponent {

}
