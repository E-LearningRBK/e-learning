import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { navBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-admin-index',
  standalone: true,
  imports: [RouterOutlet, navBarComponent],
  template: '<app-nav-bar-admin /><router-outlet />',
})
export class AdminIndexComponent {}
