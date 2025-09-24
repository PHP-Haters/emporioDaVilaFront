import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../../model/produto.model';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common';
import { EditProdutoModalComponent } from '../edit-produto-modal/edit-produto-modal.component';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';


@Component({
  selector: 'app-produto-card',
  imports: [ CommonModule, MdbModalModule ],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.scss'
})
export class ProdutoCardComponent {
  @Input() produto!: Produto;
  modalRef: MdbModalRef<EditProdutoModalComponent> | null =  null;
  @Output() edicaoConcluida = new EventEmitter<void>();
  @Output() deletar = new EventEmitter<number>();
  
  constructor(
    public authService: AuthService, 
    private modalService: MdbModalService
  ) {}

   launchModal(): void {
    this.modalRef = this.modalService.open(EditProdutoModalComponent, {
      modalClass: 'modal-dialog-centered',
      data: { produto: this.produto }
    });

    this.modalRef.onClose.subscribe((resultado) => {
      if(resultado) {
        this.edicaoConcluida.emit();
      }
    });
  }

  onDelete(): void {
    this.deletar.emit(this.produto.id);
  }
}