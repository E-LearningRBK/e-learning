import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Material } from '../courses/courses.model';

@Injectable({
  providedIn: 'root',
})
export class PostService {
  private baseUrl = 'http://127.0.0.1:3000/api/material';

  constructor(private http: HttpClient) {}

  searchcourses(query: string) {
    return this.http.get(`${this.baseUrl}/getsearched/${query}`);
  }
}
