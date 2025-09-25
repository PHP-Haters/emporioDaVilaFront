import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface Contato {
    nome: string;
    email: string;
    telefone: BigInteger;
    assunto: string;
    mensagem: string;
}

@Injectable({
    providedIn: 'root'
})
export class ContatoService {
    url = 'http://localhost:8080/produto';
    apiUrl: any;

    constructor(private http: HttpClient) {}

    enviarMensagem(contato: Contato): Observable<any> {
        return this.http.post<any>(`${this.url}/enviar`, contato, {responseType: 'json'});
    }
}
