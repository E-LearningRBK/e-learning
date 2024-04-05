import { Component, OnInit } from '@angular/core';
import { Material } from '../../model/courses.model';
import { AdminMaterialServiceService } from '../../service/admin-material-service.service';

@Component({
  selector: 'app-admin-pagination',
  standalone: true,
  imports: [],
  templateUrl: './admin-pagination.component.html',
  styleUrl: './admin-pagination.component.css'
})
export class AdminPaginationForCoursesComponent implements OnInit {
  materials: Material[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
constructor(private AdminMaterialServiceService : AdminMaterialServiceService ){}

  onPageChange(page: number): void {
    this.currentPage = page;
  }

   ngOnInit(): void {
    this.fetchMaterials();
  }

  fetchMaterials(): void {
    this.AdminMaterialServiceService.getAllMaterials().subscribe((materials) => {
      this.materials = materials;
      this.totalPages = Math.ceil(this.materials.length / this.pageSize);
    });
  }

 getPagMat(): Material[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.materials.slice(startIndex, endIndex);
  }
  
}
