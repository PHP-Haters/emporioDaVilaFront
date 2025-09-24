import { Component } from '@angular/core';
import { MdbModalRef } from 'mdb-angular-ui-kit/modal';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-edit-produto-modal',
  standalone: true, // 👈 importante
  imports: [CommonModule],
  templateUrl: './edit-produto-modal.component.html',
  styleUrls: ['./edit-produto-modal.component.scss']
})
export class EditProdutoModalComponent {
  constructor(public modalRef: MdbModalRef<EditProdutoModalComponent>) {}
}
