import { Component } from '@angular/core';

import { NavBarComponent } from '../app/user/nav-bar/nav-bar.component';
import { WelcComponent } from './user/welc/welc.component'
import { HomeComponent } from './user/home/home.component';
import { SignupComponent } from './user/signup/signup.component';
import { LoginComponent } from './user/login/login.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcComponent,NavBarComponent,HomeComponent,SignupComponent,LoginComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
