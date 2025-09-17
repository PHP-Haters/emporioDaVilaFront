import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';

@Component({
  selector: 'app-pagina-inicial',
  imports: [ HeaderComponent, BannerComponent],
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})

export class PaginaInicialComponent {

}
