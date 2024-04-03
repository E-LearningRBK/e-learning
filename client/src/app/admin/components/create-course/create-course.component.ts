import { Component } from '@angular/core';
import{MatService}from '../../service/mat.service'
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'create-course',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create-course.component.html',
  styleUrl: './create-course.component.css'
})
export class CreateCourseComponent {
  constructor(private MatService:MatService,private router: Router){}
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
  onSubmit(): void {
      this.MatService.createMat(this.form).subscribe((res) => {
        if(res){
          this.toggleModal()
          alert('created sucssefully')
          this.router.navigate(['/AllCoursesForAdmin']);

        };
        
      });
    
  }
}
