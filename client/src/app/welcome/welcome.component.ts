import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  pageTitle: string = "Corporate & Business Site";
  pageDescription: string = "We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things.";
  buttonText: string = "Get Started";
  heroImageUrl: string = "img here";

  constructor(
    
    private router: Router
  ) {}
  widgets = [
    { title: 'Widget 1', link :"link here", content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Widget 2',link :"link here", content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Widget 3',link :"link here", content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi .' }
  ];


  navigateToHome(): void {
    
    this.router.navigate(['/home']);
  }
}
