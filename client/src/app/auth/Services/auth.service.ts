import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  isAuthenticated: boolean = false;

  constructor(private http: HttpClient, private router: Router) {
    this.isAuthenticated = !!localStorage.getItem('token');
  }

  login(email: string, password: string): void {
    this.http
      .post('http://127.0.0.1:3000/api/users/signin', {
        email,
        password,
      })
      .subscribe({
        next: (res: any) => {
          if (res) {
            alert('successfully logged in');
            
            localStorage.setItem('token', res.token);
            this.isAuthenticated = true;
            if (res.logeduser.role === 'admin') {
              this.router.navigate(['/admin']);
            } else {
              this.router.navigate(['/home']);
            }
          }
        },
        error: (error) => {
          console.log('User not found.');
          alert('User not found');
        },
      });
  }

  singup(formData: any): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/api/users/signup', formData);
  }
}
