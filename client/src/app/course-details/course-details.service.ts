import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseDetailsService {
  constructor(private http: HttpClient) {}

  baseUrl = 'http://127.0.0.1:3000/api';

  getCourse(id: any) {
    return this.http.get(`${this.baseUrl}/material/getOne/${id}`);
  }

  enroll(materialId: any) {
    return this.http.get(
      `${this.baseUrl}/student/addmaterialuser/${materialId}`
    );
  }

  disenroll(materialId: any) {
    return this.http.put(`${this.baseUrl}/student/delmaterialuser`, {
      materialId,
    });
  }

  userEnrolled(materialId: any) {
    return this.http.get(`${this.baseUrl}/student/hasmaterial/${materialId}`);
  }
}
