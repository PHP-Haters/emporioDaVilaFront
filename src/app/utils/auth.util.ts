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

  get userRole(): string | null {
    const storedUser = localStorage.getItem('usuario');
    if (!storedUser) return null;

    const usuario = JSON.parse(storedUser);
    return usuario.role ?? null;
  }

  get isUserAdmin(): boolean {
    return this.userRole === 'ROLE_ADMIN';
  }

  get loggedUserId() {
    const storedUser = localStorage.getItem('usuario');

    if (!storedUser) {
      return null;
    }

    const usuario = JSON.parse(storedUser);
    return usuario.id ?? null; // retorna o id ou null se não existir
  }

  get usuarioLocal() {
    const usuario = localStorage.getItem('usuario');

    if(usuario){
      return JSON.parse(usuario);
    } else {
      return null;
    }
  }

  login(usuario: Usuario): Observable<LoginDTO> {
    return this.http.post<LoginDTO>(`${this.url}/login`, usuario);
  }

  salvarUsuarioLocal(loginDTO: LoginDTO) {
    localStorage.setItem('usuario', JSON.stringify(loginDTO.usuario));
    localStorage.setItem('token', String(loginDTO.token));

    this._isUserLoggedIn = true;
  }

  logout() {
    this._isUserLoggedIn = false;
    localStorage.removeItem('usuario');
  }
}
