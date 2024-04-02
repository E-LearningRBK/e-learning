import { Component, OnInit } from '@angular/core';
import { CourseDetailsService } from './course-details.service';
import { ActivatedRoute } from '@angular/router';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'course-details',
  standalone: true,
  imports: [],
  providers: [DatePipe],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent implements OnInit {
  materialId: any;
  constructor(
    private datePipe: DatePipe,
    private courseDetailsService: CourseDetailsService,
    private route: ActivatedRoute
  ) {}

  enrolledDate?: string | null;
  data: any;
  enrolled: any;

  ngOnInit() {
    this.route.paramMap.subscribe((p) => {
      this.materialId = p.get('id');
      this.courseDetailsService
        .getCourse(this.materialId)
        .subscribe((response) => {
          this.data = response;

          this.enrolledDate = this.datePipe.transform(
            this.data.date,
            'dd/MM/yyyy'
          );
          console.log(this.enrolledDate);
          
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
