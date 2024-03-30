import { Component } from '@angular/core';
import { NavBarComponent } from '../nav-bar/nav-bar.component';

@Component({
  selector: 'app-welc',
  standalone: true,
  imports: [NavBarComponent],
  templateUrl: './welc.component.html',
  styleUrls: ['./welc.component.css']
})
export class WelcComponent {
  
  pageTitle: string = "Corporate & Business Site Template by Ayro UI.";
  pageDescription: string = "We are a digital agency that helps brands to achieve their business outcomes. We see technology as a tool to create amazing things.";
  buttonText: string = "Get Started";
  heroImageUrl: string = "https://usagif.com/wp-content/uploads/2021/4fh5wi/troll-face-13.gif";

  widgets = [
    { title: 'Widget 1', content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
    { title: 'Widget 2', content: 'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.' },
    { title: 'Widget 3', content: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi .' }
  ];
}
