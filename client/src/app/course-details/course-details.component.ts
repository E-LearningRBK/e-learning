import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  constructor(private http: HttpClient) {}

  data: any = {};

  ngOnInit() {
    this.http
      .get('http://127.0.0.1:3000/api/material/getOne/5')
      .subscribe((data) => {
        console.log(data);
        
        this.data = data;
      });
  }
}
