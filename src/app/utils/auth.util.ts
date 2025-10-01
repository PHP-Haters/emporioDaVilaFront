import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario.model";
@Injectable({ providedIn: 'root' })
export class AuthUtil {
  private _isUserLoggedIn: boolean = false;

  constructor() {
    // Ao iniciar, lê o estado do localStorage
    if(localStorage.getItem('userId')) {
      this._isUserLoggedIn = true;
    }
  }

  get isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  get isUserAdmin(): boolean {
    return Boolean(localStorage.getItem("isAdmin"));
  }

  login(usuarioLogado: Usuario) {
    localStorage.setItem('userId', String(usuarioLogado.id));
    localStorage.setItem("isAdmin", String(usuarioLogado.admin));
    this._isUserLoggedIn = true;
  }

  logout() {
    this._isUserLoggedIn = false;
    localStorage.removeItem('userId');
    localStorage.removeItem('isAdmin');
  }
}
