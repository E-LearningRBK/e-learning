import { Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { CourseDetailsComponent } from './student/components/course-details/course-details.component';
import { UserCoursesComponent } from './student/components/user-courses/user-courses.component';
import { courses } from './student/components/courses/courses.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './student/components/home/home.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { homeComponent } from './admin/components/admin-home/home.component';
import { AllCoursesForAdminComponent } from './admin/components/all-courses-for-admin/all-courses-for-admin.component';
import { AllUsersForAdminComponent } from './admin/components/all-users-for-admin/all-users-for-admin.component';
import { CreateCourseComponent } from './admin/components/create-course/create-course.component';
import { StudentDetailComponent } from './admin/components/student-detail/student-detail.component';
import { EditComponent } from './student/components/edit/edit.component';
import { AdminIndexComponent } from './admin/components/admin-index/admin-index.component';
import { IndexComponent } from './student/components/index/index.component';
import { UpdateCourseForAdminComponent } from './admin/components/update-course-for-admin/update-course-for-admin.component';
import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  // Welcome Route
  { path: '', component: WelcomeComponent },
  // User Routes
  {
    path: '',
    component: IndexComponent,
    canActivate: [authGuard],
    children: [
      { path: 'home', component: HomeComponent }, // "HomeComponent" user for user
      {
        path: 'course',
        component: CourseDetailsComponent,
      },
      { path: 'course/:id', component: CourseDetailsComponent },
      { path: 'my-courses', component: UserCoursesComponent },
      { path: 'edit', component: EditComponent },
      { path: 'all-courses', component: courses },
    ],
  },
  // Auth Routes
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // Admin Routes
  {
    path: 'admin',
    component: AdminIndexComponent,
    canActivate: [authGuard],
    children: [
      { path: '', component: homeComponent }, // "homeComponent" for admin
      { path: 'createCourse', component: CreateCourseComponent },
      { path: 'AllUsersForAdmin', component: AllUsersForAdminComponent },
      { path: 'AllCoursesForAdmin', component: AllCoursesForAdminComponent },
      { path: 'studentDetail/:id', component: StudentDetailComponent },
      {path : "updateMatForAdmin/:id" , component : UpdateCourseForAdminComponent}
    ],
  },
];
