import { Component } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { BannerComponent } from '../../components/banner/banner.component';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-pagina-inicial',
  imports: [ HeaderComponent, BannerComponent],
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.scss']
})

export class PaginaInicialComponent {

  constructor(private authService: AuthService) {}

  // ngOnInit() {
  //   console.log(this.authService.isLoggedIn);
  // }
  
}
