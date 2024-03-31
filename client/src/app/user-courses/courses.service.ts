import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../courses/courses.model';

@Injectable({
  providedIn: 'root',

})
export class MaterialUserService {
  private baseUrl = 'http://127.0.0.1:3000/api/student';

  constructor(private http: HttpClient) { }

  getAllMaterials(id: number): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrl}/getmaterials/5`);
  }

  getMaterialById(id: number): Observable<Material> {
    return this.http.get<Material>(`${this.baseUrl}/getOne/${id}`);
  }

}
