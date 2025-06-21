import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth-service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.scss'
})
export class Login implements OnInit {
  username = '';
  password = '';
  errorMessage = '';
  error = false;

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {}

  signUp() {
    this.router.navigate(['sign-up']);
  }

  onSubmit() {
    const username = this.username.trim();
    const password = this.password.trim();

    if (!username || !password) {
      this.errorMessage = 'Username and password are required';
      this.error = true;
      return;
    }

    this.auth.login(username, password).subscribe({
      next: (res) => {
        if (res.success) {
          this.error = false;
          this.router.navigate(['/home']);
        } else {
          this.error = true;
          this.errorMessage = 'Wrong credentials';
        }
      },
      error: (err) => {
        this.error = true;
        this.errorMessage = 'Server error. Try again later.';
        console.error('Login error:', err);
      }
    });
  }
}
