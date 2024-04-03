import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarComponent } from '../student/components/nav-bar/nav-bar.component';
@Component({
  selector: 'app-welcome',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.css'
})
export class WelcomeComponent {
  pageTitle: string = "Corporate & Business Site";
  pageDescription: string = "We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things.";
  buttonText: string = "Get Started";
  heroImageUrl: string = "https://img.freepik.com/photos-gratuite/apprentissage-idees-education-insight-intelligence-study-concept_53876-120116.jpg?t=st=1712170084~exp=1712170684~hmac=e3129b7113c8810514ef188e1538b5ac07a525289ce1d61fb427c6d556f2ecaf";

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
