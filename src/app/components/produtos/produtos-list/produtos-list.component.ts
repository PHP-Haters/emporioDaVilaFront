import { Component, OnInit } from '@angular/core';
import { ProdutoCardComponent } from '../produto-card/produto-card.component';
import { Produto } from '../../../model/produto.model';
import { ProdutosService } from '../../../service/produtos/produtos.service';
import { CommonModule } from '@angular/common';
import { ProdutosFilterComponent } from '../produtos-filter/produtos-filter.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-list',
  templateUrl: './produtos-list.component.html',
  styleUrls: ['./produtos-list.component.scss'],
  imports: [ CommonModule, ProdutoCardComponent, ProdutosFilterComponent ]
})
export class ProdutosListComponent implements OnInit {
  categorias: String[] = [];
  produtos: Produto[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
  }

  carregarProdutos(): void {
    this.produtosService.getAllProdutos().subscribe({
      next: (produtos) => {
        this.produtos = produtos;
      }
    });
  }
  
  removerProduto(id: number): void {
  this.produtosService.deleteProduto(id).subscribe({
    next: () => {
      this.produtos = this.produtos.filter(p => p.id !== id);
      Swal.fire('Sucesso!', 'Produto deletado com sucesso!', 'success');
    }
  });
}

  filtrarPorCategoria(categoria: string): void {
    if (categoria === 'TODOS') {
      this.carregarProdutos(); // chama a rota que retorna todos
    } else {
      this.produtosService.getProdutosPorCategoria(categoria).subscribe({
        next: (produtos) => {
          this.produtos = produtos; // atualiza a lista de produtos
        }
      });
    }
  }
}
