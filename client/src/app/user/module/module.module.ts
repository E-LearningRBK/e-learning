import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { HomeComponent } from '../home/home.component';
import { WelcComponent } from '../welc/welc.component';
import { LoginComponent } from '../login/login.component';
import { SignupComponent } from '../signup/signup.component';

@NgModule({
  declarations: [
AppComponent,
HomeComponent,
WelcComponent,
LoginComponent,
SignupComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ModuleModule { }
