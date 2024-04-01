import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from './nav-bar/nav-bar.component'; //navbar user
import { navBarComponent } from './admin/components/nav-bar/nav-bar.component'; //navbar admin

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,navBarComponent,NavBarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'client';
  heroImageUrl: string = "../assets/image.png";
}
