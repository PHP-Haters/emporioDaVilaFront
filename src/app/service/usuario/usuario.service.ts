import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Usuario } from "../../model/usuario.model";
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  private url = 'http://localhost:8080/usuario';

  constructor(private http: HttpClient) {}

  criarUsuario(usuario: Usuario): Observable<any> {
    return this.http.post(this.url, usuario, { responseType: 'text' });
  }

  getAllUsuarios(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url);
  }

  getUsuarioById(id: number): Observable<Usuario> {
    return this.http.get<Usuario>(`${this.url}/${id}`);
  }

  editarUsuario(usuario: Usuario): Observable<any> {
    return this.http.put(`${this.url}/${usuario.id}`, usuario, { responseType: 'text' });
  }

  deleteUsuario(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
