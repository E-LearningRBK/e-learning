import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Material } from '../model/courses.model';

@Injectable({
  providedIn: 'root'
})
export class AdminMaterialServiceService {
  private baseUrlForMat = 'http://127.0.0.1:3000/api/material';
  constructor(private http: HttpClient) { }

  getAllMaterials(): Observable<Material[]> {
    return this.http.get<Material[]>(`${this.baseUrlForMat}/getAll`);
  }
  updateMat(id: any, updatedMaterial: Material): Observable<Material> {
    return this.http.put<Material>(`${this.baseUrlForMat}/update/${id}`, updatedMaterial);
  }
  createMat(form: any){
    return this.http.post(`${this.baseUrlForMat}/add`, {
      form
    });
  }
  delMat(id: any): Observable<Material> {
    return this.http.delete<Material>(`${this.baseUrlForMat}/delete/${id}`);
  }
  getUsersCount():Observable<any>{
    return this.http.get<Material>(`http://127.0.0.1:3000/api/student/getAllMaterialUser`);
  }
}
