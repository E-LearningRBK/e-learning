import { Component , OnInit } from '@angular/core';
import { Material } from '../../model/courses.model';
import { AdminMaterialServiceService } from '../../service/admin-material-service.service';
import { Router } from '@angular/router';


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
    private AdminMaterialServiceService: AdminMaterialServiceService,
    private router : Router
  ) {}

  ngOnInit(): void {
    this.fetchMaterials();
  }

  fetchMaterials(): void {
    this.AdminMaterialServiceService.getAllMaterials().subscribe((materials) => {
      this.materials = materials;
    });
  }

  navigateToCourses( mat : Material) : void{
    this.router.navigate(['/updateMatForAdmin', mat.id]);
  }

}
