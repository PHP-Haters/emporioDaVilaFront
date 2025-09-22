import { Component, Input } from '@angular/core';
import { Produto } from '../../../model/produto.model';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produto-card',
  imports: [ CommonModule ],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.scss'
})
export class ProdutoCardComponent {
  @Input() produto!: Produto;

  constructor(public authService: AuthService) {}
}
