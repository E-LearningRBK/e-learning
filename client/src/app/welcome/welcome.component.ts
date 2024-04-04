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
image="https://cdn.discordapp.com/attachments/1186419023290826803/1225490272272646164/411064-PDFYPJ-619-removebg_1.png?ex=662151c1&is=660edcc1&hm=3f0c3b81b956f0c921078907abe78bfb40027a6d5c428ae0ddbce2153a53be89&"
  constructor(
    
    private router: Router
  ) {}



  navigateToLogin(): void {
    
    this.router.navigate(['/login']);
  }
}
