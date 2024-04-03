import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { UserCoursesComponent } from './user-courses/user-courses.component';
import { courses } from './courses/courses.component';
import { RegisterComponent } from './register/register.component';
import { HomeComponent } from './home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { homeComponent } from './admin/components/admin-home/home.component';
import { AllCoursesForAdminComponent } from './admin/components/all-courses-for-admin/all-courses-for-admin.component';
import { AllUsersForAdminComponent } from './admin/components/all-users-for-admin/all-users-for-admin.component';
import { CreateCourseComponent } from './admin/components/create-course/create-course.component';
import { StudentDetailComponent } from './admin/components/student-detail/student-detail.component';
import { AdminIndexComponent } from './admin/components/admin-index/admin-index.component';
import { IndexComponent } from './student/components/index/index.component';

export const routes: Routes = [
  {
    path: 'admin',
    component: AdminIndexComponent,
    children: [
      { path: '', component: homeComponent }, // "homeComponent" for admin
      { path: 'createCourse', component: CreateCourseComponent },
      { path: 'AllUsersForAdmin', component: AllUsersForAdminComponent },
      { path: 'AllCoursesForAdmin', component: AllCoursesForAdminComponent },
      { path: 'studentDetail/:id', component: StudentDetailComponent },
    ],
  },
  {
    path: '',
    component: IndexComponent,
    children: [
      { path: '', component: WelcomeComponent },
      { path: 'home', component: HomeComponent }, // "HomeComponent" user for user
      { path: 'course', component: CourseDetailsComponent },
      { path: 'course/:id', component: CourseDetailsComponent },
      { path: 'my-courses', component: UserCoursesComponent },
      { path: 'all-courses', component: courses },
    ],
  },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
];
