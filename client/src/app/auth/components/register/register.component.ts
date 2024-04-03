import { Component } from '@angular/core';
import { AuthService } from '../../Services/auth.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css',
})
export class RegisterComponent {
  form: any = {
    firstName: null,
    lastName: null,
    email: null,
    password: null,
    imageUrl: null,
  };
  image: string =
    'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png';
  constructor(private authService: AuthService) {}
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

    this.authService.singup(formData).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: (err) => {
        console.log(err);
      },
    });
  }
  StrongPassword(password: string): boolean {
    const Regx: RegExp = /^(?=[^A-Z]*[A-Z])(?=[^a-z]*[a-z])(?=\D*\d).{8,}$/;
    return Regx.test(password);
  }
}
