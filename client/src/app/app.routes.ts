import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { courses } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';


export const routes: Routes = [
  {path : 'home' , component: HomeComponent},
  {path : 'welcome', component : WelcomeComponent},
  { path: 'login', component: LoginComponent },
  { path: 'register', component:RegisterComponent },
  { path: 'course', component: CourseDetailsComponent },
  { path: 'course/:id', component: CourseDetailsComponent },
  { path: 'my-courses', component: UserCoursesComponent },
  { path: 'all-courses', component: courses },
];
