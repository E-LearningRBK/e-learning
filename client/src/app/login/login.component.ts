import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
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

  form: any = {
    email: null,
    password: null,
  };



  onSubmit():void{
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: (res) => {
        console.log(res);
        localStorage.setItem('token', res.token);
        // this.router.navigate(['/app-register']);
        alert('successfully logged in')
      },
      error: (error) => {
        console.log('User not found.');
        alert('User not found')
      },
    });
  }
}
