import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../courses/courses.model';


@Injectable({
  providedIn: 'root',

})
export class HomeService {
  private baseUrl = 'http://127.0.0.1:3000/api/material';

  constructor(private http: HttpClient) { }

  getAllMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrl}/getAll`);
  }

}