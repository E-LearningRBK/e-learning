import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from './course-details.service';
import { ActivatedRoute } from '@angular/router';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'course-details',
  standalone: true,
  imports: [MatMenuModule, MatButtonModule],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  materialId: any;
  constructor(
    private courseDetailsService: CourseDetailsService,
    private route: ActivatedRoute
  ) {}

  data: any;
  enrolled: any;

  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      this.materialId = p.get('id');
      this.courseDetailsService
        .getCourse(this.materialId)
        .subscribe((response) => {
          this.data = response;
        });

      this.courseDetailsService
        .userEnrolled(22, this.materialId)
        .subscribe((response) => {
          this.enrolled = response;
        });
    });
  }

  enroll() {
    this.courseDetailsService
      .enroll(22, this.materialId)
      .subscribe((response) => {
        console.log(response);
        window.location.reload();
      });
  }
}
