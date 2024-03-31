import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CourseDetailsService {
  constructor(private http: HttpClient) {}

  getCourse(id: number) {
    return this.http.get(`http://127.0.0.1:3000/api/material/getOne/${id}`);
  }

  enroll(userId: number, materialId: number) {
    return this.http.post(
      `http://127.0.0.1:3000/api/student/addmaterialuser`,
      { userId, materialId }
    );
  }

  userEnrolled(userId: number, materialId: number) {
    return this.http.get(
      `http://127.0.0.1:3000/api/student/hasmaterial/${userId}/${materialId}`
    );
  }
}
