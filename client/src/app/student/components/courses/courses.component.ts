import { Component, OnInit } from '@angular/core';
import { MaterialService } from './courses.service';
import { Material } from './courses.model';
import { AppComponent } from '../../../app.component';
import { Router } from '@angular/router';
import { SearchBarComponent } from '../search-bar/search-bar.component';
import { CourseDetailsService } from '../course-details/course-details.service';

@Component({
  selector: 'app-material-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  standalone: true,
  imports: [AppComponent, SearchBarComponent],
})
export class courses implements OnInit {
  materials: Material[] = [];

  constructor(
    private courseService: CourseDetailsService,
    private materialService: MaterialService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.fetchMaterials();
  }

  fetchMaterials(): void {
    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials;
      this.totalPages = Math.ceil(this.materials.length / this.pageSize);
    });
  }

  materialDetaille(material: Material): void {
    // console.log('Consulter : ', material);
    this.router.navigate(['/course', material.id]);
  }

  enroll(id?: number) {
    this.courseService.enroll(id).subscribe((response) => {
      console.log(response);
      window.location.reload();
    });
  }

  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getpagMat(): Material[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.materials.slice(startIndex, endIndex);
  }
}
