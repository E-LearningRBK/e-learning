import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminMaterialServiceService } from '../../service/admin-material-service.service';
import { Material } from '../../model/courses.model';
import { AllCoursesForAdminComponent } from '../all-courses-for-admin/all-courses-for-admin.component';


@Component({
  selector: 'create-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent implements OnInit {
  materials : Material[] = []
  constructor(private MatService:AdminMaterialServiceService,private router: Router ){}
  form: any = {
    name: null,
    description: null,
    price: null,
    link: null,
    date: null
  };
  isModalOpen = false;
  toggleModal() {
    this.isModalOpen = !this.isModalOpen;
  }

  

 
  
 fetch() : void{
  this.MatService.getAllMaterials().subscribe((mat)=>{
    this.materials = mat
    console.log("this.materials in fetchMat =>",this.materials)
})
 }
 ngOnInit(): void {
    
  this.fetch()
    

}
  

  onSubmit(): void {
    let that = this
      this.MatService.createMat(this.form).subscribe((res) => {
        if(res){
          console.log('res =>', res)
          this.toggleModal()
          
       this.fetch()
          
            this.router.navigate(['/admin/AllCoursesForAdmin']);
      

        }
        
      });
    
  }
 
}
