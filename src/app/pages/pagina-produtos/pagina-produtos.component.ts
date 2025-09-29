import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProdutosListComponent } from "../../components/produtos/produtos-list/produtos-list.component";

@Component({
  selector: 'app-pagina-produtos',
  imports: [HeaderComponent, BannerComponent, FooterComponent, ProdutosListComponent],
  templateUrl: './pagina-produtos.component.html',
  styleUrl: './pagina-produtos.component.scss'
})
export class PaginaProdutosComponent {

}
