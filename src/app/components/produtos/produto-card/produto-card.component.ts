import { Component, Input } from '@angular/core';
import { Produto } from '../../../model/produto.model';
import { AuthService } from '../../../service/auth.service';
import { CommonModule } from '@angular/common';
import { EditProdutoModalComponent } from '../edit-produto-modal/edit-produto-modal.component';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';

@Component({
  selector: 'app-produto-card',
  imports: [ CommonModule, MdbModalModule, EditProdutoModalComponent ],
  templateUrl: './produto-card.component.html',
  styleUrl: './produto-card.component.scss'
})
export class ProdutoCardComponent {
  @Input() produto!: Produto;
  modalRef: MdbModalRef<EditProdutoModalComponent> | null =  null;

  constructor(
    public authService: AuthService, 
    private modalService: MdbModalService
  ) {}

  launchModal(): void{
    this.modalRef = this.modalService.open(EditProdutoModalComponent, {
      modalClass: 'modal-dialog-centered'
    })
  }
}
