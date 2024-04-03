import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {}
  hide = true;
  form: any = {
    email: null,
    password: null,
  };

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: (res) => {
        if (res) {
          alert('successfully logged in');
          console.log(res);
          localStorage.setItem('token', res.token);
          if (res.logeduser.role === 'admin') {
            this.router.navigate(['/admin']);
          } else {
            this.router.navigate(['/my-courses']);
          }
        }
      },
      error: (error) => {
        console.log('User not found.');
        alert('User not found');
      },
    });
  }
}
