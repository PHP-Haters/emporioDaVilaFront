import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario.model";
@Injectable({ providedIn: 'root' })
export class AuthUtil {
  private _isUserLoggedIn: boolean = false;

  constructor() {
    // Ao iniciar, lê o estado do localStorage
    this._isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
  }

  get isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  login(usuarioLogado: Usuario) {
    localStorage.setItem('userId', String(usuarioLogado.id));
    localStorage.setItem("isAdmin", String(usuarioLogado.admin));

  }

  logout() {
    this._isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }
}
