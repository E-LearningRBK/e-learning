import { Component, OnInit } from '@angular/core';
import { MaterialUserService } from './courses.service';
import { AppComponent } from '../app.component';
import { Material } from '../courses/courses.model';
import { CourseDetailsService } from '../course-details/course-details.service';

@Component({
  selector: 'app-user-courses',
  standalone: true,
  imports: [AppComponent],
  templateUrl: './user-courses.component.html',
  styleUrl: './user-courses.component.css',
})
export class UserCoursesComponent implements OnInit {
  materials: Material[] = [];
  id: number = 5;
  constructor(
    private materialUserService: MaterialUserService,
    private courseDetailsService: CourseDetailsService
  ) {}

  ngOnInit(): void {
    this.fetchMaterials();
  }

  fetchMaterials(): void {
    this.materialUserService.getAllMaterials(this.id).subscribe((materials) => {
      this.materials = materials;
    });
  }
  materialDetaille(material: Material): void {
    console.log('Consulter : ', material);
  }

  disenroll(materialId: any) {
    this.courseDetailsService.disenroll(materialId).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }
}
