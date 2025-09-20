import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { ProdutosService } from '../../service/produtos/produtos.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pagina-gerenciamento',
  standalone: true, // <-- importante para standalone components
  imports: [CommonModule, HeaderComponent, FooterComponent], // CommonModule permite *ngFor etc.
  templateUrl: './pagina-gerenciamento.component.html',
  styleUrls: ['./pagina-gerenciamento.component.scss']
})
export class PaginaGerenciamentoComponent implements OnInit {
  categorias: string[] = [];

  constructor(private produtosService: ProdutosService) {}

  ngOnInit(): void {
    this.produtosService.getCategorias().subscribe({
      next: (data) => {
        this.categorias = data;
        console.log('Categorias recebidas:', data); // <-- imprime no console
      },
      error: (err) => console.error('Erro ao buscar categorias', err)
    });
  }
}
