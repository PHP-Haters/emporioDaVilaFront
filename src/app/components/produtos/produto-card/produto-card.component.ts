import { Component, Input } from '@angular/core';
import { Produto } from '../../../model/produto.model';

@Component({
  selector: 'app-produto-card',
  imports: [],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.scss'
})
export class ProdutoCardComponent {
  @Input() produto!: Produto;
}
