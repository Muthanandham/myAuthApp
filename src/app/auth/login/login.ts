import { Component } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [CommonModule,FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login {
 username = '';
  password = '';

  constructor(private auth: AuthService, private router: Router) {}

  onLogin(): void {
 
  }

  errorMessage = '';
  error = false;

  ngOnint() {}
  signUp() {
    this.router.navigate(['sign-up']);
  }
  onSubmit() {
    const username = this.username?.trim();
    const password = this.password?.trim();

    if (!username || !password) {
      this.errorMessage = 'Username and password are required';
      return;
    }

    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];

    const isValid = users.some(
      (user: any) => user.username === username && user.password === password
    );

    if (isValid) {
      this.errorMessage = '';
      this.router.navigate(['/login']);
    } else {
      this.errorMessage = 'Wrong credentials';
    }
    if (this.auth.login(this.username, this.password)) {
      this.router.navigate(['/home']);
    } else {
      this.error = true;
    }
  }
}
