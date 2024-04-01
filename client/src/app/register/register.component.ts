import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    // imageUrl: null,
  };

  constructor(private authService: AuthService) {}

  onSubmit() {
    const { firstName, lastName, email, password, imageUrl } = this.form;

    this.authService
      .singup(firstName, lastName, email, password, imageUrl)
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
