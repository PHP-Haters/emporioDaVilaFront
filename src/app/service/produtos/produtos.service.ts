import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class ProdutosService {
    url = 'http://localhost:8080/produto';

    constructor(private http: HttpClient) {}

    getCategorias(): Observable<string[]> {
        return this.http.get<string[]>(`${this.url}/categorias`);
    }
}
