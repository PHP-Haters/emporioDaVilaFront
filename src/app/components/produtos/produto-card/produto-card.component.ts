import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Produto } from '../../../model/produto.model';
import { AuthUtil } from '../../../utils/auth.util';
import { CommonModule } from '@angular/common';
import { EditProdutoModalComponent } from '../edit-produto-modal/edit-produto-modal.component';
import { MdbModalModule, MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';
import Swal from 'sweetalert2';
import { Pedido } from '../../../model/pedido.model';
import { ProdutoPedidoService } from '../../../service/produto-pedido/produtoPedido.service';
import { ProdutoPedido } from '../../../model/produtoPedido.model';


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
    private modalService: MdbModalService,
    private produtoPedidoService: ProdutoPedidoService
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

  addToCart() {
    Swal.fire({
      title: 'Adicionar ao Carrinho',
      text: `Informe a quantidade desejada para: ${this.produto.nome}`,
      input: 'number',
      inputAttributes: {
        min: '1',
        step: '1'
      },
      inputValue: 1,
      showCancelButton: true,
      confirmButtonText: 'Adicionar',
      cancelButtonText: 'Cancelar',
      confirmButtonColor: '#638C04',
      cancelButtonColor: '#bb3030ff',
      heightAuto: false,
      inputValidator: (value: any) => {
        if (!value || isNaN(value) || value <= 0) {
          return 'Informe uma quantidade válida!';
        }
        return null;
      }
    }).then((result) => {
      if (result.isConfirmed) {
        const quantidade = Number(result.value);
        const produtoId: number = this.produto.id;

        Swal.fire({
          title: 'Adicionado!',
          text: `Você adicionou ${quantidade} unidade(s) ao carrinho.`,
          icon: 'success',
          timer: 1800,
          showConfirmButton: false,
          heightAuto: false
        });

        const produtoPedido: ProdutoPedido =  new ProdutoPedido();
        produtoPedido.produto = this.produto;
        produtoPedido.quantidadeProduto = quantidade;
        // Achar uma forma de adicionar o pedido ativo aqui

        this.produtoPedidoService.criarProdutoPedido(produtoPedido).subscribe({
          next: (response) => {
            console.log(response);
          }
        });
      }
    });
  }
}