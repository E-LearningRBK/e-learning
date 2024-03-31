import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form: any = {
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    role: String,
    imageUrl: String,
  };
  constructor(private authService: AuthService) {}

  onSubmit(): void {
    const { firstname, lastname, email, password, role, imageUrl } = this.form;

    this.authService
      .singup(firstname, lastname, email, password, role, imageUrl)
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (err) => {
          console.log(err);
        },
      });
  }
}
