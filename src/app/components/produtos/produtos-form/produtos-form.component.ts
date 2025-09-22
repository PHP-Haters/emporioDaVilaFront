import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutosService } from '../../../service/produtos/produtos.service';
import { CommonModule } from '@angular/common';
import { Produto } from '../../../model/produto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-produtos-form',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './produtos-form.component.html',
  styleUrls: ['./produtos-form.component.scss']
})
export class ProdutosFormComponent implements OnInit {
  form!: FormGroup;
  categorias: string[] = [];

  constructor(
    private fb: FormBuilder,
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0)]],
      stock: [true], // default true
      categoria: ['', Validators.required]
    });

    this.carregarCategorias();
  }

  carregarCategorias(): void {
    this.produtosService.getCategorias().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
      error: (err) => {
        console.error('Erro ao carregar categorias:', err);
      }
    });
  }

  salvar(): void {
    if (this.form.valid) {
      const produto: Produto = new Produto(this.form.value); // cria instância de Produto

      this.produtosService.criarProduto(produto).subscribe({
        next: () => {
          Swal.fire('Sucesso!', 'Produto criado com sucesso!', 'success');

          // Limpando o formulário
          this.form.reset({
            nome: '',
            valor: 0,
            stock: true,
            categoria: ''
          });
        },
        error: (err) => {
          console.error('Erro ao criar produto:', err);
          Swal.fire('Erro!', 'Não foi possível criar o produto.', 'error');
        }
      });
    } 
  }
}
