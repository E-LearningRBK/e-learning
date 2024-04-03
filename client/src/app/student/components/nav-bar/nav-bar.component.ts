import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent {
  heroImageUrl: string = "../assets/image.png";


  constructor(
    
    private router: Router
  ) {}
  navigateToWelc(): void {
    
    this.router.navigate(['/']);
  }
}
