import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../auth/Services/auth.service';
import { UserDropdownComponent } from '../user-dropdown/user-dropdown.component';
@Component({
  selector: 'app-nav-bar',
  standalone: true,
  imports: [UserDropdownComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css',
})
export class NavBarComponent {
  isAuthenticated: boolean = false;

  constructor(private router: Router, private authService: AuthService) {
    this.isAuthenticated = authService.isAuthenticated;
  }

  navigateToWelc(): void {
    this.router.navigate(['/']);
  }
}
