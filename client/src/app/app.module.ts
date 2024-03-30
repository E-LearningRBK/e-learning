import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';
import { HomeComponent } from './user/home/home.component';
import { LoginComponent } from './user/login/login.component';
import { NavBarComponent } from './user/nav-bar/nav-bar.component';
import { SignupComponent } from './user/signup/signup.component';
import { WelcComponent } from './user/welc/welc.component';


@NgModule({
  declarations:[
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    SignupComponent,
    WelcComponent
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
