import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AdminMaterialServiceService } from '../../service/admin-material-service.service';

@Component({
  selector: 'app-update-course-for-admin',
  standalone: true,
  imports: [],
  templateUrl: './update-course-for-admin.component.html',
  styleUrl: './update-course-for-admin.component.css'
})
export class UpdateCourseForAdminComponent {
  constructor(
    private AdminMaterialServiceService :  AdminMaterialServiceService ,
    private router : Router
    ){}
  
    updateMat(): void {
  this.AdminMaterialServiceService.updateMat('implement here').subscribe()
    }
  
    
    navigateToAllCourses():void{
      this.router.navigate(['/admin/AllCoursesForAdmin'])
    }
}




