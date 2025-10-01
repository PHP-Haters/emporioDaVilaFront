import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { FooterComponent } from '../../components/footer/footer.component';

@Component({
  selector: 'app-pagina-contato',
  imports: [ HeaderComponent, BannerComponent, FooterComponent], 
  templateUrl: './pagina-contato.component.html',
  styleUrls: ['./pagina-contato.component.scss']
})

export class PaginaContatoComponent {

}
