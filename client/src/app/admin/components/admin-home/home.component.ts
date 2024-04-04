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
  [x: string]: any;
  materials: Material[] = [];
  constructor(
    private AdminUserServiceService: AdminUserServiceService,
    private AdminMaterialServiceService: AdminMaterialServiceService
  ) {}
  users: users[] = [];
  userCount: any;
  ngOnInit(): void {
    this.fetchUsers();
    this.fetchMaterials();

    this.fetchstatic();
  }
  fetchUsers(): void {
    this.AdminUserServiceService.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
  fetchMaterials(): void {
    this.AdminMaterialServiceService.getAllMaterials().subscribe(
      (materials) => {
        this.materials = materials;
      }
    );
  }
  fetchstatic(): void {
    this.AdminMaterialServiceService.getUsersCount().subscribe((userCount) => {
      this.userCount = userCount;
      const sortedArr = this.userCount.sort(
        (a: any, b: any) => b.Users.length - a.Users.length
      );
      const top5 = sortedArr.slice(0, 5);
      this.userCount = top5;
    });
  }
  getFormattedWidth(usersArray: any[]): string {
    const percentageWidth = (usersArray.length * 100) / this.users.length;
    console.log(percentageWidth.toFixed(2));
    return percentageWidth.toFixed(2);
  }
}
