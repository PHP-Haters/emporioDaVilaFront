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

  produtos: Produto[] = []; // Lista que será preenchida pelo backend

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarProdutos();
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
}
