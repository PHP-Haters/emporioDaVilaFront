import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { ProdutosService } from '../../../service/produtos/produtos.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-filter',
  imports: [ CommonModule ],
  templateUrl: './produtos-filter.component.html',
  styleUrl: './produtos-filter.component.scss'
})
export class ProdutosFilterComponent {
  categorias: string[] = [];
  @Output() categoriaSelecionada =  new EventEmitter<string>();

  constructor (private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.produtosService.getCategorias().subscribe({
      next: (categorias) => {
        // adiciona "todos" no início do array
        this.categorias = ['TODOS', ...categorias];
      },
      error: (err) => {
        let errorMsg = 'Erro desconhecido';

        if (err.error instanceof ErrorEvent) {
          // Erro de rede ou do lado do cliente
          errorMsg = `Erro de rede: ${err.error.message}`;
        } else {
          // Erro vindo do servidor
          errorMsg = `Erro ${err.status}: ${err.error?.message || err.message}`;
        }

        Swal.fire('Erro!', errorMsg, 'error');
        console.error('Detalhes do erro:', err);
      }
    });
  }

  onCategoriaChange(categoria: string): void {
    this.categoriaSelecionada.emit(categoria);
  }
}
