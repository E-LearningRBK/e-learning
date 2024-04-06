import { Component , OnInit ,Input} from '@angular/core';
import { Material } from '../../model/courses.model';
import { AdminMaterialServiceService } from '../../service/admin-material-service.service';
import { Router } from '@angular/router';
import { CreateCourseComponent } from '../create-course/create-course.component';


@Component({
  selector: 'app-all-courses-for-admin',
  standalone: true,
  imports: [CreateCourseComponent],
  templateUrl: './all-courses-for-admin.component.html',
  styleUrl: './all-courses-for-admin.component.css'
})
export class AllCoursesForAdminComponent implements OnInit {
  materials: Material[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private AdminMaterialServiceService: AdminMaterialServiceService,
    private router : Router,

  ) {}

  ngOnInit(): void {
    this.fetchMaterials();
  }
  fetchMaterials(): void {
    this.AdminMaterialServiceService.getAllMaterials().subscribe((materials) => {
      this.materials = materials;
      this.totalPages = Math.ceil(this.materials.length / this.pageSize);
    });
  }

  navigateToCourses( mat : Material) : void{
    this.router.navigate(['/admin/updateMatForAdmin', mat.id]);
  }

  
  delCourse(id :any): void {
  this.AdminMaterialServiceService.delMat(id).subscribe(() => {
    this.fetchMaterials()
    console.log('deleted')

})
  }
  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getPagMat(): Material[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.materials.slice(startIndex, endIndex);
  }

}
  


