import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../../model/produto.model';
import { AuthUtil } from '../../../utils/auth.util';
import { CommonModule } from '@angular/common';
import { EditProdutoModalComponent } from '../edit-produto-modal/edit-produto-modal.component';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';


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
    public authService: AuthUtil, 
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
    Swal.fire({
      title: 'Tem certeza que deseja deletar este produto?',
      text: 'Essa ação não poderá ser desfeita',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Deletar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#638C04',
      cancelButtonColor: '#bb3030ff',
      reverseButtons: true,
      heightAuto: false,

        }).then((result) => {
      if (result.isConfirmed) {
    this.deletar.emit(this.produto.id);
      Swal.fire({
          title: 'Produto deletado!',
          text: 'O produto foi removido com sucesso.',
          icon: 'success',
          timer: 2000,
          showConfirmButton: false,
          heightAuto: false
        });
      }
    });
  }
}