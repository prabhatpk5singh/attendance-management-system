import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.authService.login(this.username, this.password)) {
      const role = this.authService.getRole();
      if (role === 'manager') {
        this.router.navigate(['/manager']);
      } else if (role === 'staff') {
        this.router.navigate(['/staff']);
      }
    } else {
      this.errorMessage = 'Invalid credentials';
    }
  }
}
