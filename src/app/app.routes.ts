import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PaginaProdutosComponent } from './pages/pagina-produtos/pagina-produtos.component';
import { PaginaContatoComponent } from './pages/pagina-contato/pagina-contato.component';
import { PaginaGerenciamentoComponent } from './pages/pagina-gerenciamento/pagina-gerenciamento.component';
import { PaginaGerenciamentoPedidosComponent } from './pages/pagina-gerenciamento-pedidos/pagina-gerenciamento-pedidos.component';
import { PaginaGerenciamentoUsuariosComponent } from './pages/pagina-gerenciamento-usuarios/pagina-gerenciamento-usuarios.component';
import { PaginaUsuarioComponent } from './pages/pagina-usuario/pagina-usuario.component';
import { PaginaProdutoComponent } from './pages/pagina-produto/pagina-produto.component';

export const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: 'inicio', component: PaginaInicialComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'produtos', component: PaginaProdutosComponent },
  { path: 'contato', component: PaginaContatoComponent },
  { path: 'gerenciamento', component: PaginaGerenciamentoComponent },
  { path: 'gerenciamento/pedidos', component: PaginaGerenciamentoPedidosComponent },
  { path: 'gerenciamento/usuarios', component: PaginaGerenciamentoUsuariosComponent },
  { path: 'usuario', component: PaginaUsuarioComponent },
  { path: 'produto', component: PaginaProdutoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
