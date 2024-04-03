import { Component } from '@angular/core';
import { navBarComponent } from '../nav-bar/nav-bar.component';
import { AdminUserServiceService } from '../../service/admin-user-service.service';
import { users } from '../../model/users.model';
import { AdminMaterialServiceService } from '../../service/admin-material-service.service';
import { Material } from '../../model/courses.model';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [navBarComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class homeComponent {
  materials: Material[]=[];
  constructor(private AdminUserServiceService: AdminUserServiceService,private AdminMaterialServiceService:AdminMaterialServiceService) {}
  users: users[] = [];
  ngOnInit(): void {
    this.fetchUsers();
    this.fetchMaterials()
  }
  fetchUsers(): void {
    this.AdminUserServiceService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
  fetchMaterials(): void {
    this.AdminMaterialServiceService.getAllMaterials().subscribe((materials) => {
      this.materials = materials;
    });
}
}
