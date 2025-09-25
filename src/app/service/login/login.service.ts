import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    url = 'http://localhost:8080/produto';
    apiUrl: any;

    constructor(private http: HttpClient) {}

    login(email: string, senha: string): Observable<boolean> {
        return this.http.post<boolean>(`${this.url}/login`, {email, senha});
    }

    logout(): void {
        sessionStorage.removeItem('logado');
    }

    salvarSessao(): void {
        sessionStorage.setItem('logado', 'true');
    }

    isLogado(): boolean {
        return sessionStorage.getItem('logado') === 'true';
    }
}