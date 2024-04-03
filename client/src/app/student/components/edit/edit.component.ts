import { Component, OnInit } from '@angular/core';
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
export class EditComponent implements OnInit {
  form: any = {
    id: null,
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

    private router: Router
  ) {}
  data: any;
  userId: any;
  ngOnInit() {
    this.editService.getUser().subscribe((res) => {
      this.data = res;
      console.log(res);
      this.form.id = this.data.id;
      this.form.firstName = this.data.firstName;
      this.form.lastName = this.data.lastName;
      this.form.email = this.data.email;
      this.form.imageUrl = this.image = this.data.imageUrl;
    });
  }

  onFileSelected(e: any) {
    const file: File = e.target.files[0];
    const reader = new FileReader();

    reader.onload = (event: any) => {
      const dataURL = event.target.result;
      // Here, dataURL will contain the base64 representation of the file's contents
      console.log(dataURL);
      this.image = dataURL;
    };

    reader.readAsDataURL(file);

    this.form.imageUrl = file;
  }

  onSubmit() {
    const formData = new FormData();

    formData.append('imageUrl', this.form.imageUrl);
    formData.append('firstName', this.form.firstName);
    formData.append('lastName', this.form.lastName);
    formData.append('email', this.form.email);
    formData.append('password', this.form.password);
    formData.append('newPassword', this.form.newPassword);

    this.editService.update(formData).subscribe((res) => {
      console.log(res);
      window.location.reload();
    });
  }
}
