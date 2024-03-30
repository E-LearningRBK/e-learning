import { Component, OnInit } from '@angular/core';
import { MaterialService } from './courses.service';
import { Material } from './courses.model';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-material-list',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  standalone:true,
  imports:[AppComponent]
})
export class courses implements OnInit {

  materials: Material[] = [];
 
  constructor(private materialService: MaterialService) { }

  ngOnInit(): void {
    this.fetchMaterials();
  }


  

  fetchMaterials(): void {
    this.materialService.getAllMaterials().subscribe(materials => {
      this.materials = materials;
    });
  }
  materialDetaille(material: Material): void {
    console.log('Consulter : ', material);
   
  }




}
