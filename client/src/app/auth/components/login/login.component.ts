import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService) {}
  hide = true;
  form: any = {
    email: null,
    password: null,
  };

  onSubmit(): void {
    const { email, password } = this.form;
    this.authService.login(email, password)
  }
}
