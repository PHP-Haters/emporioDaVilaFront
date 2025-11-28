import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pagamento } from "../../model/pagamento.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PagamentoService {
  private url = environment.SERVIDOR + '/pagamento';

  constructor(private http: HttpClient) {}

  criarPagamento(pagamento: Pagamento): Observable<any> {
    return this.http.post(this.url, pagamento, { responseType: 'text' });
  }

  getAllPagamentos(): Observable<Pagamento[]> {
    return this.http.get<Pagamento[]>(this.url);
  }

  getPagamentoById(id: number): Observable<Pagamento> {
    return this.http.get<Pagamento>(`${this.url}/${id}`);
  }

  editarPagamento(pagamento: Pagamento): Observable<any> {
    return this.http.put(`${this.url}/${pagamento.id}`, pagamento, { responseType: 'text' });
  }

  deletePagamento(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
