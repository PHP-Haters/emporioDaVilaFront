import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Endereco } from "../../model/endereco.model";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {
  private url = 'http://localhost:8080/endereco';

  constructor(private http: HttpClient) {}

  // Criar endereço
  criarEndereco(endereco: Endereco): Observable<any> {
    return this.http.post(this.url, endereco, { responseType: 'text' });
  }

  // Buscar todos os endereços
  getAllEnderecos(): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(this.url);
  }

  // Buscar endereço por ID
  getEnderecoById(id: number): Observable<Endereco> {
    return this.http.get<Endereco>(`${this.url}/${id}`);
  }

  // Atualizar endereço
  editarEndereco(endereco: Endereco): Observable<any> {
    return this.http.put(`${this.url}/${endereco.id}`, endereco, { responseType: 'text' });
  }

  // Deletar endereço
  deleteEndereco(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }

  // Buscar endereços de um usuário
  getEnderecosByUsuarioId(usuarioId: number): Observable<Endereco[]> {
    return this.http.get<Endereco[]>(`${this.url}/usuario/${usuarioId}`);
  }
}
