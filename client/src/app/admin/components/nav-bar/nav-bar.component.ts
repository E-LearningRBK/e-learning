import { Component } from '@angular/core';

@Component({
  selector: 'app-nav-bar-admin',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class navBarComponent {
  heroImageUrl: string = "../../../../assets/logo.png";
}
