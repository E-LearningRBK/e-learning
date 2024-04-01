import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseDetailsService {
  constructor(private http: HttpClient) {}

  getCourse(id: any) {
    return this.http.get(`http://127.0.0.1:3000/api/material/getOne/${id}`);
  }

  enroll(userId: any, materialId: any) {
    return this.http.get(
      `http://127.0.0.1:3000/api/student/addmaterialuser/${materialId}`
    );
  }

  userEnrolled(userId: any, materialId: any) {
    return this.http.get(
      `http://127.0.0.1:3000/api/student/hasmaterial/${materialId}`
    );
  }
}
