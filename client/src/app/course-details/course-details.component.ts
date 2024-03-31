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

  data: any;
  enrolled: any;

  ngOnInit() {
    this.courseDetailsService.getCourse(1).subscribe((response) => {
      this.data = response;
    });

    this.courseDetailsService.userEnrolled(22, 1).subscribe((response) => {
      this.enrolled = response;
    });
  }

  enroll() {
    this.courseDetailsService.enroll(22, 1).subscribe((response) => {
      console.log(response);
    });
  }
}
