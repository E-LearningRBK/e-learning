import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class MatService {
  private baseUrl = 'http://127.0.0.1:3000/api/material';

  constructor(private http: HttpClient) {}
  createMat(form: any){
    return this.http.post(`${this.baseUrl}/add`, {
      form
    });
  }
}
