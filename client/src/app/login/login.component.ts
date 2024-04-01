import { Component } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,MatIconModule,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent {
  constructor(private authService: AuthService,private router:Router) {}
  hide = true;
  form: any = {
    email: null,
    password: null,
  };

  onSubmit(): void {
    const { email, password } = this.form;

    this.authService.login(email, password).subscribe({
      next: (res) => {
        if(res){
          alert('successfully logged in');
        console.log(res);
        localStorage.setItem('token', res.token);
        if(res.logeduser.role==='admin'){
          this.router.navigate(['/adminHome'])
        }
        else {
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
