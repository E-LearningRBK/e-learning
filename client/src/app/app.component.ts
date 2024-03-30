import { Component } from '@angular/core';

import { NavBarComponent } from '../app/user/nav-bar/nav-bar.component';
import { WelcComponent } from './user/welc/welc.component'
import { HomeComponent } from './user/home/home.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [WelcComponent,NavBarComponent,HomeComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
}
