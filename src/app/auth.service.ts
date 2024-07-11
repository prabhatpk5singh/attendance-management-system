import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isAuthenticated: boolean = false;
  private role: string = '';

  login(username: string, password: string): boolean {
    if (username === 'manager' && password === 'managerpass') {
      this.isAuthenticated = true;
      this.role = 'manager';
      return true;
    } else if (username === 'staff' && password === 'staffpass') {
      this.isAuthenticated = true;
      this.role = 'staff';
      return true;
    }
    this.isAuthenticated = false;
    return false;
  }

  logout() {
    this.isAuthenticated = false;
    this.role = '';
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }

  getRole(): string {
    return this.role;
  }
}
