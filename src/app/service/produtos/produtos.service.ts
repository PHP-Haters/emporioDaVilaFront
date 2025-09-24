import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Produto } from "../../model/produto.model";

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {
    url = 'http://localhost:8080/produto';
    apiUrl: any;

    constructor(private http: HttpClient) {}

    getCategorias(): Observable<string[]> {
        return this.http.get<string[]>(`${this.url}/categorias`);
    }

    getAllProdutos(): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.url}`);
    }

    getProdutosPorCategoria(categoria: string): Observable<Produto[]> {
        return this.http.get<Produto[]>(`${this.url}/categoria/${categoria}`);
    }

    criarProduto(produto: Produto): Observable<any> {
        return this.http.post(this.url, produto, { responseType: 'text' });
    }

    editarProduto(produto: Produto): Observable<any> {
        return this.http.put(this.url + '/' + produto.id, produto, { responseType: 'text' });
    }
    deleteProduto(id: number) {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
}
}
