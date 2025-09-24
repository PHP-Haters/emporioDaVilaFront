import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { ProdutosService } from '../../../service/produtos/produtos.service';

@Component({
  selector: 'app-edit-produto-modal',
  standalone: true, // 👈 importante
  imports: [ CommonModule, ReactiveFormsModule ],
  templateUrl: './edit-produto-modal.component.html',
  styleUrls: ['./edit-produto-modal.component.scss']
})
export class EditProdutoModalComponent {
  form!: FormGroup;
  categorias: string[] = []

  constructor(
    public modalRef: MdbModalRef<EditProdutoModalComponent>,
    private fb: FormBuilder,
    private produtosService: ProdutosService
  ) {}

  ngOnInit(): void {
    this.configForm();
    this.loadCategories();
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

  onSubmit(): void {
    if (this.form.valid) {
      console.log('Produto editado:', this.form.value);
      this.modalRef.close(this.form.value); // fecha o modal retornando os dados
    } else {
      this.form.markAllAsTouched(); // marca todos os campos como tocados para exibir erros
    }
  }
}
