import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'user-dropdown',
  standalone: true,
  imports: [],
  templateUrl: './user-dropdown.component.html',
  styleUrl: './user-dropdown.component.css',
})
export class UserDropdownComponent {
  constructor(private router: Router) {}

  navigate(path?: string): void {
    this.router.navigate([path]);
  }

  signOut() {
    localStorage.clear();
    window.location.reload();
  }
}
