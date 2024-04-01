import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../model/courses.model';
import {users} from '../model/users.model'
@Injectable({
  providedIn: 'root'
})
export class adminService {

  private baseUrlForMat = 'http://127.0.0.1:3000/api/material';
  private baseUrlForUsers = 'http://127.0.0.1:3000/api/users';

  constructor(private http: HttpClient) { }

  getAllMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrlForMat}/getAll`);
  }

  getAllUsers() : Observable<Material[]>{
    return this.http.get<users[]>(`${this.baseUrlForUsers}/getAll`)
  }
}
