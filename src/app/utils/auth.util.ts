import { Injectable } from "@angular/core";
import { Usuario } from "../model/usuario.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoginDTO } from "../model/loginDTO.model";

@Injectable({ providedIn: 'root' })
export class AuthUtil {
  private _isUserLoggedIn: boolean = false;
  private url: string = 'http://localhost:8080/auth';

  constructor(private http: HttpClient) {
    // Ao iniciar, lê o estado do localStorage
    if(localStorage.getItem('usuario')) {
      this._isUserLoggedIn = true;
    }
  }

  get isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  get isUserAdmin(): boolean {
    return localStorage.getItem('isAdmin') === 'true';
  }

  get loggedUserId() {
    if(localStorage.getItem('userId')){
      return localStorage.getItem('userId');
    } else {
      return null;
    }
  }

  get usuarioLocal() {
    if(localStorage.getItem('userId')){
      return localStorage.getItem('userId');
    }
  }

  login(usuario: Usuario): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(`${this.url}/login`, usuario);
  }

  salvarUsuarioLocal(usuarioLogado: Usuario) {
    localStorage.setItem('usuario', JSON.stringify(usuarioLogado));

    this._isUserLoggedIn = true;
  }

  logout() {
    this._isUserLoggedIn = false;
    localStorage.removeItem('usuario');
  }
}
