import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { users } from '../model/users.model';
@Injectable({
  providedIn: 'root',
})
export class AdminUserServiceService {
  private baseUrlForUsers = 'http://127.0.0.1:3000/api/users';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<users[]> {
    return this.http.get<users[]>(`${this.baseUrlForUsers}/getAll`);
  }
  getOneUser(id: number): Observable<users[]> {
    return this.http.get<users[]>(`${this.baseUrlForUsers}/getOne/${id}`);
  }

 
}
