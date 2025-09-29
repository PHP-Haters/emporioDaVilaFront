import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ProdutoPedido } from "../../model/produtoPedido.model";

@Injectable({
  providedIn: 'root'
})
export class ProdutoPedidoService {
  private url = 'http://localhost:8080/produto-pedido';

  constructor(private http: HttpClient) {}

  criarProdutoPedido(produtoPedido: ProdutoPedido): Observable<any> {
    return this.http.post(this.url, produtoPedido, { responseType: 'text' });
  }

  getAllProdutoPedidos(): Observable<ProdutoPedido[]> {
    return this.http.get<ProdutoPedido[]>(this.url);
  }

  getProdutoPedidoById(id: number): Observable<ProdutoPedido> {
    return this.http.get<ProdutoPedido>(`${this.url}/${id}`);
  }

  editarProdutoPedido(produtoPedido: ProdutoPedido): Observable<any> {
    return this.http.put(`${this.url}/${produtoPedido.id}`, produtoPedido, { responseType: 'text' });
  }

  deleteProdutoPedido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
