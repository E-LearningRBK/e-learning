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
  enrolled: any = false;

  ngOnInit() {
    this.courseDetailsService.getCourse(7).subscribe((response) => {
      this.data = response;
    });
    this.courseDetailsService.userEnrolled(5, 6).subscribe((response) => {
      this.enrolled = response;
    });
  }
}
