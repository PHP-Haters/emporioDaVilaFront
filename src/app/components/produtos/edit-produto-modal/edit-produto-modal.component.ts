import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutosService } from '../../../service/produtos/produtos.service';
import { Produto } from '../../../model/produto.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-produto-modal',
  standalone: true, // 👈 importante
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './edit-produto-modal.component.html',
  styleUrls: ['./edit-produto-modal.component.scss']
})
export class EditProdutoModalComponent {
  @Input() produto!: Produto;
  form!: FormGroup;
  categorias: string[] = []
  @Output() edicaoConcluida = new EventEmitter<void>();

  constructor(
    public modalRef: MdbModalRef<EditProdutoModalComponent>,
    private fb: FormBuilder,
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.configForm();
    this.loadCategories();
    this.populateForm();
  }

  configForm(): void {
    this.form = this.fb.group({
      nome: ['', Validators.required],
      valor: [0, [Validators.required, Validators.min(0)]],
      stock: [false],
      categoria: ['', Validators.required]
    });
  }

  loadCategories(): void {
    this.produtosService.getCategorias().subscribe({
      next: (categorias) => {
        this.categorias = categorias;
      },
    });
  }

  populateForm(): void {
    if (this.produto) {
      this.form.patchValue({
        nome: this.produto.nome,
        valor: this.produto.valor,
        stock: this.produto.stock,
        categoria: this.produto.categoria
      });
    } else {
      Swal.fire('Erro!', 'Não foi possível carregar os dados do produto', 'error');
    }
  }

  onSubmit(): void {
    if (this.form.valid) {
      
    const produtoAtualizado: Produto = {
      ...this.produto,
      ...this.form.value
    };

    this.produtosService.editarProduto(produtoAtualizado).subscribe({
      next: () => {
        Swal.fire('Sucesso!', 'Produto editado com sucesso!', 'success');

        this.edicaoConcluida.emit();
        this.modalRef.close(produtoAtualizado); // retorna os dados atualizados
      }
    });
      
    } else {
      this.form.markAllAsTouched(); // exibe erros nos campos do formulário
    }
  }
}
