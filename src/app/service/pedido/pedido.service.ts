import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Pedido } from "../../model/pedido.model";
import { environment } from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  private url = environment.SERVIDOR + '/pedido';

  constructor(private http: HttpClient) {}

  criarPedido(pedido: Pedido): Observable<any> {
    return this.http.post(this.url, pedido, { responseType: 'text' });
  }

  getAllPedidos(): Observable<Pedido[]> {
    return this.http.get<Pedido[]>(this.url);
  }

  getPedidoById(id: number): Observable<Pedido> {
    return this.http.get<Pedido>(`${this.url}/${id}`);
  }

  editarPedido(pedido: Pedido): Observable<any> {
    return this.http.put(`${this.url}/${pedido.id}`, pedido, { responseType: 'text' });
  }

  deletePedido(id: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${id}`);
  }
}
