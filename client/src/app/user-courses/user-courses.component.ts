import { Component, OnInit } from '@angular/core';
import { MaterialUserService } from './courses.service';
import { AppComponent } from '../app.component';
import { Material } from '../courses/courses.model';
import {  SearchBarComponent } from '../search-bar/search-bar.component';

@Component({
  selector: 'app-user-courses',
  standalone: true,
  imports: [AppComponent, SearchBarComponent],
  templateUrl: './user-courses.component.html',
  styleUrl: './user-courses.component.css'
})


export class UserCoursesComponent implements OnInit {

  materials: Material[] = [];
  id: number = 5
  constructor(private materialUserService: MaterialUserService) { }

  ngOnInit(): void {
    this.fetchMaterials();
  }


  fetchMaterials(): void {
    this.materialUserService.getAllMaterials(this.id).subscribe(materials => {
      this.materials = materials;
    });
  }
  materialDetaille(material: Material): void {
    console.log('Consulter : ', material);
  }

}


