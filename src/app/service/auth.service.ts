import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class AuthService {
  private _isUserLoggedIn: boolean = false;

  constructor() {
    // Ao iniciar, lê o estado do localStorage
    this._isUserLoggedIn = localStorage.getItem('isUserLoggedIn') === 'true';
  }

  get isUserLoggedIn(): boolean {
    return this._isUserLoggedIn;
  }

  login() {
    this._isUserLoggedIn = true;
    localStorage.setItem('isUserLoggedIn', 'true');
  }

  logout() {
    this._isUserLoggedIn = false;
    localStorage.removeItem('isUserLoggedIn');
  }
}
