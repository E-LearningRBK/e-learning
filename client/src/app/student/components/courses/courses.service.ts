import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from './courses.model';

@Injectable({
  providedIn: 'root',
})
export class MaterialService {
  private baseUrl = 'http://127.0.0.1:3000/api/material';

  constructor(private http: HttpClient) {}

  getAllMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrl}/getAll`);
  }

  getMaterialById(id: number): Observable<Material> {
    return this.http.get<Material>(`${this.baseUrl}/getOne/${id}`);
  }
  paymentDirection(material: any): Observable<any> {
    return this.http.post(`http://127.0.0.1:3000/api/payment/add`, material);
  }
}
