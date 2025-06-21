import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private isAuthenticated = false;

  constructor(private http: HttpClient) {}

  login(username: string, password: string) {
    return this.http.post<{ success: boolean }>('http://localhost:7000/login', { username, password })
      .pipe(
        tap(res => this.isAuthenticated = res.success)
      );
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
