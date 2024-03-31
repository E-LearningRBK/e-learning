import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { courses } from './courses/courses.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'course', component: CourseDetailsComponent },
  { path: 'my-courses', component: UserCoursesComponent },
  { path: 'all-courses', component: courses },
];
