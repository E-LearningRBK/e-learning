import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from './course-details.service';

@Component({
  selector: 'course-details',
  standalone: true,
  imports: [],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  constructor(private courseDetailsService: CourseDetailsService) {}

  data: any = {};

  ngOnInit() {
    this.courseDetailsService.getCourse(7).subscribe((response) => {
      this.data = response;
    });
  }
}
