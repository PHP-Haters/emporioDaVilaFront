import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';  // <-- Import obrigatório!
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  scrolled: boolean = false;
  constructor(private router: Router) {}

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.scrolled = window.scrollY > 50;
  }

  goToLogin() {
    this.router.navigate(['/login']);
  }
}
