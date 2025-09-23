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
      // Agora o erro é tratado e exposto por error.interceptor.ts
    });
  }

  onCategoriaChange(categoria: string): void {
    this.categoriaSelecionada.emit(categoria);
  }
}
