import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/api/users/signin', {
      email,
      password,
    });
  }
  singup(
    firstname: String,
    lastname: String,
    email: String,
    password: String,
    role: String,
    imageUrl: String
  ): Observable<any> {
    return this.http.post('http://127.0.0.1:3000/api/users/signup', {
      firstname,
      lastname,
      email,
      password,
      role,
      imageUrl,
    });
  }
}
