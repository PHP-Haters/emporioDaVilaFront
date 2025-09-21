import { Component } from '@angular/core';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';
import { Produto } from '../../../model/produto.model';
import { Categoria } from '../../../model/enum/categorias.enum';

@Component({
  selector: 'app-produtos-list',
  imports: [ ProdutoCardComponent ],
  templateUrl: './produtos-list.component.html',
  styleUrl: './produtos-list.component.scss'
})
export class ProdutosListComponent {
  meuProduto: Produto = new Produto({
    id: 1,
    nome: 'Maçã',
    valor: 3.50,
    stock: true,
    imagem: 'https://via.placeholder.com/150',
    categoria: Categoria.FRUTAS
  });
}
