import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';  // <-- Import obrigatório!
import { CommonModule } from '@angular/common';
import { AuthUtil } from '../../utils/auth.util';
import { MdbDropdownModule } from 'mdb-angular-ui-kit/dropdown';

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
    this.authUtil.logout();
    this.router.navigate(['/inicio']);
  }
}
