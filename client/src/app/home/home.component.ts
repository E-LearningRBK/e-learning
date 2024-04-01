import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';
import { Material } from '../courses/courses.model';
import {HomeService} from '../home/home.service'
// import { MatButtonModule } from '@angular/material/button';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AppComponent,/*MatButtonModule*/],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  materials: Material[] = [];

  constructor(
    private homeService: HomeService,
  ) {}

  ngOnInit(): void {
    this.fetchMaterials();
  }

  fetchMaterials(): void {
    this.homeService.getAllMaterials().subscribe((materials) => {
      this.materials = materials;
    });
  }
}
