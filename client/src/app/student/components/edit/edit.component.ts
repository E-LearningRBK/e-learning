import { Component } from '@angular/core';
import { FormControl, FormsModule, Validators } from '@angular/forms';
import { EditService } from './edit.service';
import { User } from './edit.model';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit.component.html',
  styleUrl: './edit.component.css',
})
export class EditComponent {
  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    imageUrl: null,
    newPassword: null,
  };
  image: string =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  constructor(
    public editService: EditService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onFileSelected(e: any) {
    const file: File = e.target.files[0];
    this.form.imageUrl = file;
    this.image = URL.createObjectURL(file);
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('imageUrl', this.form.imageUrl);
    formData.append('firstName', this.form.firstName);
    formData.append('lastName', this.form.lastName);
    formData.append('email', this.form.email);
    formData.append('password', this.form.password);
    formData.append('newPassword', this.form.newPassword);
    console.log(this.form);
  }

  submit() {}
}
