import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminMaterialServiceService } from '../../service/admin-material-service.service';
import { Material } from '../../model/courses.model';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-course-for-admin',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './update-course-for-admin.component.html',
  styleUrl: './update-course-for-admin.component.css'
})
export class UpdateCourseForAdminComponent {
  constructor(
    private AdminMaterialServiceService :  AdminMaterialServiceService ,
    private router : Router,
    private active : ActivatedRoute
    ){}
    form: Material = {
      name: '', 
      description: '', 
      price: 0, 
      date: '', 
      link: '' 
    };

id:any
navigateToAllCourses():void{
this.router.navigate(['/admin/AllCoursesForAdmin'])
}
    update(): void {
      this.active.paramMap.subscribe((param)=>{
            this.id = param.get('id') 
            console.log("this.id :",this.id )
            this.AdminMaterialServiceService.updateMat(this.id, this.form).subscribe(
              () => {
                console.log('updated !');
                this.navigateToAllCourses()
              },
              () => {
                
              
                alert('implement all the feilds');
              }
              
            );
      })
    }

    
    
    
   
    
}




