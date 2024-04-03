import { Component , OnInit } from '@angular/core';
import { Material } from '../../model/courses.model';
import { adminService } from '../../service/admin.service';

@Component({
  selector: 'app-all-courses-for-admin',
  standalone: true,
  imports: [],
  templateUrl: './all-courses-for-admin.component.html',
  styleUrl: './all-courses-for-admin.component.css'
})
export class AllCoursesForAdminComponent implements OnInit {
  materials: Material[] = [];

  constructor(
    private materialService: adminService,
    
  ) {}

  ngOnInit(): void {
    this.fetchMaterials();
  }

  fetchMaterials(): void {
    this.materialService.getAllMaterials().subscribe((materials) => {
      this.materials = materials;
    });
  }



}