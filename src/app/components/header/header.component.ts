import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';  // <-- Import obrigatório!
import { CommonModule } from '@angular/common';
import { AuthUtil } from '../../utils/auth.util';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ CommonModule, MdbDropdownModule ],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() bgGranulado : boolean = false;
  scrolled: boolean = false;

  constructor(private router: Router, public authUtil: AuthUtil) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }

  logout() {
        Swal.fire({
      title: 'Tem certeza que deseja sair?',
      text: 'Você será deslogado e precisará fazer o login novamente',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim',
      cancelButtonText: 'Não',
      confirmButtonColor: '#638C04',
      cancelButtonColor: '#d33',
    }).then((result) => {
      if (result.isConfirmed) {
        this.authUtil.logout();
        this.router.navigate(['/inicio']);
        Swal.fire({
          title: 'Logout realizado!',
          icon: 'success',
          timer: 1000,
          showConfirmButton: false,
        });
      }
    });
  }
}
