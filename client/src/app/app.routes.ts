import { Routes } from '@angular/router';

import { HomeComponent } from "../app/user/home/home.component";
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { WelcComponent } from './user/welc/welc.component';


export const routes: Routes = [
  { path: 'welcome', component: WelcComponent },
  { path: 'home', component: HomeComponent },
  {path : "login", component: LoginComponent},
  {path : "signup", component: SignupComponent}
];
