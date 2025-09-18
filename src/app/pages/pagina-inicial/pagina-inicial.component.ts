import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pagina-inicial',
  imports: [ HeaderComponent, BannerComponent, FooterComponent],
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})

export class PaginaInicialComponent {

}
