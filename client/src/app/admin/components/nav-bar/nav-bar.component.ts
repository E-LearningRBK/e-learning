import { Component } from '@angular/core';
import { DropAdminComponent } from '../drop-admin/drop-admin.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar-admin',
  standalone: true,
  imports: [DropAdminComponent],
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class navBarComponent {
  heroImageUrl: string = "../../../../assets/logo.png";
  constructor(private router : Router){

  }
}
