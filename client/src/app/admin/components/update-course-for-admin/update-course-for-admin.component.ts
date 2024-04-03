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
    private AdminMaterialServiceService: AdminMaterialServiceService,
    private router: Router,
    private active: ActivatedRoute
  ) { }

  form: Material = {
    name: '',
    description: '',
    price: 0,
    date: '',
    link: ''
  };

  id: any;

  navigateToAllCourses(): void {
    this.router.navigate(['/admin/AllCoursesForAdmin']);
  }

  update(): void {
    this.active.paramMap.subscribe((param) => {
      this.id = param.get('id');
      console.log("this.id :", this.id);

      let updatedData: any = {};

     
      if (this.form.name && this.form.name.trim() !== '') {
        updatedData.name = this.form.name;
      }
      if (this.form.description && this.form.description.trim() !== '') {
        updatedData.description = this.form.description;
      }
      if (this.form.price !== 0) {
        updatedData.price = this.form.price;
      }
      if (this.form.date && this.form.date.trim() !== '') {
        updatedData.date = this.form.date;
      }
      if (this.form.link && this.form.link.trim() !== '') {
        updatedData.link = this.form.link;
      }

     
      if (Object.keys(updatedData).length > 0) {
        this.AdminMaterialServiceService.updateMat(this.id, updatedData).subscribe(
          (res) => {
            console.log('res :',res);
            this.navigateToAllCourses();
          })
      }
    });
  }
}
