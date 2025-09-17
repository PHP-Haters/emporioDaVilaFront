import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // garante que seja singleton
})
export class AuthService {
  private isUserLoggedIn = false;

  get isLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  login() {
    this.isUserLoggedIn = true;
  }

  logout() {
    this.isUserLoggedIn = false;
  }
}
