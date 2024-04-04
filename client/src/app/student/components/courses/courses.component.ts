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
  link: string = '';
  materials: Material[] = [];
  material?: Material;
  isModalOpen: boolean = false;

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


  renavigate() {
    window.open(this.link, '_blank');
  }
  async paymentReDirection(material?: Material) {
    try {
      const response = await this.materialService.paymentDirection(material).toPromise();
      if (response && response.result && response.result.link) {
         this.link = response.result.link;
      } else {
        console.log(response);
        alert(' unable to access')
      }
    } catch (error) {
      console.log( error);
      alert(' unable to access')
    }
  }
  
  

  toggleModal(material: any) {
    this.material = material;
    this.isModalOpen = !this.isModalOpen;
    if (this.isModalOpen) this.paymentReDirection(material);
  }
  pageSize: number = 9;
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

