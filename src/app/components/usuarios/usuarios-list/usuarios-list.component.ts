import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Usuario } from '../../../model/usuario.model';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuarios-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './usuarios-list.component.html',
  styleUrls: ['./usuarios-list.component.scss']
})
export class UsuariosListComponent {

  @Input() usuarios: Usuario[] = [];

    deletarUsuario(){
      Swal.fire({
      title: 'Tem certeza?',
      text: `Deseja realmente excluir este usuário`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, deletar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {

        // 👉 Aqui você chama o seu service para deletar o usuário
        // this.usuarioService.delete(usuario.id).subscribe(...)

        Swal.fire(
          'Deletado!',
          'Usuário removido com sucesso.',
          'success'
        );
      }
    });
    }

    editarUsuario(usuario: Usuario) {
    Swal.fire({
      title: 'Editar Usuário',
      html: `
        <input id="swal-nome" class="swal2-input" placeholder="Nome" value="${usuario.nome}">
        <input id="swal-email" class="swal2-input" placeholder="Email" value="${usuario.email}">
        <input id="swal-telefone" class="swal2-input" placeholder="Telefone" value="${usuario.telefone}">
      `,
      focusConfirm: false,
      showCancelButton: true,
      confirmButtonText: 'Salvar',
      cancelButtonText: 'Cancelar',
      preConfirm: () => {
        const nome = (document.getElementById('swal-nome') as HTMLInputElement).value;
        const email = (document.getElementById('swal-email') as HTMLInputElement).value;
        const telefone = (document.getElementById('swal-telefone') as HTMLInputElement).value;

        if (!nome || !email) {
          Swal.showValidationMessage('Nome e email são obrigatórios.');
          return;
        }

        return { nome, email, telefone };
      }
    }).then(result => {
      if (result.isConfirmed) {
        const dados = result.value;

        // 👉 Aqui você envia para o service
        // this.usuarioService.update(usuario.id, dados).subscribe(...)

        Swal.fire('Atualizado!', 'Dados do usuário foram alterados.', 'success');
      }
    });
  }

}