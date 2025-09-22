import { Component, OnInit } from '@angular/core';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';
import { Produto } from '../../../model/produto.model';
import { ProdutosService } from '../../../service/produtos/produtos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss'],
  imports: [ CommonModule, ProdutoCardComponent ]
})
export class ProdutosListComponent implements OnInit {
  categorias: String[] = [];
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarCategorias();
    this.carregarProdutos();
  }

  carregarCategorias(): void {
    this.produtosService.getCategorias().subscribe({
      next: (categorias) => {
        // adiciona "todos" no início do array
        this.categorias = ['TODOS', ...categorias];
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
      }
    });
  }

  carregarProdutos(): void {
    this.produtosService.getAllProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      },
      error: (err) => {
        console.error('Erro ao carregar produtos:', err);
      }
    });
  }

  filtrarCategoria(event: Event): void {
  const select = event.target as HTMLSelectElement;
  const categoria = select.value.toUpperCase(); // se você padronizou TODAS as categorias em maiúsculo
  console.log('Categoria selecionada:', categoria);

  if (categoria === 'TODOS') {
    this.carregarProdutos(); // chama a rota que retorna todos
  } else {
    this.produtosService.getProdutosPorCategoria(categoria).subscribe({
      next: (produtos) => {
        this.produtos = produtos; // atualiza a lista de produtos
      },
      error: (err) => {
        console.error('Erro ao carregar produtos por categoria:', err);
      }
    });
  }
}

}
