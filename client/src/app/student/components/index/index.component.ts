import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent],
  template: '<app-nav-bar /> <router-outlet />',
})
export class IndexComponent {}
