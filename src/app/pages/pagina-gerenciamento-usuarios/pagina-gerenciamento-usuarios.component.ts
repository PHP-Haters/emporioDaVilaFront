import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { UsuarioService } from '../../service/usuario/usuario.service';
import { CommonModule } from '@angular/common';
import { UsuariosListComponent } from '../../components/usuarios/usuarios-list/usuarios-list.component';
import { Usuario } from '../../model/usuario.model';

@Component({
  selector: 'app-pagina-gerenciamento-usuarios',
  standalone: true,
  imports: [ CommonModule, HeaderComponent, FooterComponent, UsuariosListComponent],
  templateUrl: './pagina-gerenciamento-usuarios.component.html',
  styleUrls: ['./pagina-gerenciamento-usuarios.component.scss']
})

export class PaginaGerenciamentoUsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];

  constructor(private usuarioService: UsuarioService) {}

  ngOnInit(): void {
    this.usuarioService.getAllUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
      },
      error: (err) => {
        console.error('Erro ao carregar usuários', err);
      }
    });
  }
}
