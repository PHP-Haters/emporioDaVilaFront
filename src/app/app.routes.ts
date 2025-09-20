import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pages/pagina-inicial/pagina-inicial.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PaginaProdutosComponent } from './pages/pagina-produtos/pagina-produtos.component';
import { PaginaContatoComponent } from './pages/pagina-contato/pagina-contato.component';
import { PaginaGerenciamentoComponent } from './pages/pagina-gerenciamento/pagina-gerenciamento.component';

export const routes: Routes = [
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: 'inicio', component: PaginaInicialComponent },
  { path: 'login', component: LoginPageComponent },
  { path: 'produtos', component: PaginaProdutosComponent },
  { path: 'contato', component: PaginaContatoComponent },
  { path: 'gerenciamento', component: PaginaGerenciamentoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
