import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { LoginComponent } from './app/login/login.component';
import { AppComponent } from './app/app.component';
import { CourseDetailsComponent } from './app/course-details/course-details.component';

bootstrapApplication(CourseDetailsComponent, appConfig).catch((err) =>
  console.error(err)
);
