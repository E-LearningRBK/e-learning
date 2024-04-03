import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './edit.model';

@Injectable({
  providedIn: 'root',
})
export class EditService {
  constructor(private http: HttpClient) {}

  update(id: any, formData: any): Observable<User> {
    return this.http.put(
      `http://localhost:3000/api/users/update/${id}`,
      formData
    );
  }
  getOne(id: any): Observable<User> {
    return this.http.get<any>(`http://localhost:3000/api/users/getOne/${id}`);
  }
}
