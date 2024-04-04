import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-drop-admin',
  standalone: true,
  imports: [],
  templateUrl: './drop-admin.component.html',
  styleUrl: './drop-admin.component.css'
})
export class DropAdminComponent {
  heroImageUrl: string = "../../../../assets/logo.png";

  constructor(private router: Router) {}

  signOut() {
    localStorage.clear();
    window.location.reload();
  }
}
