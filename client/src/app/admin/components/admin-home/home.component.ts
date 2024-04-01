import { Component } from '@angular/core';
import { navBarComponent } from '../nav-bar/nav-bar.component';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [navBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class homeComponent {

}
