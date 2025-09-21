import { Component } from '@angular/core';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';

@Component({
  selector: 'app-produtos-list',
  imports: [ ProdutoCardComponent ],
  templateUrl: './produtos-list.component.html',
  styleUrl: './produtos-list.component.scss'
})
export class ProdutosListComponent {

}
