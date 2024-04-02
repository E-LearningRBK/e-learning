import { Component, OnInit } from '@angular/core';
import { adminService } from '../../service/admin.service';
import { users } from '../../model/users.model';
import { Router } from '@angular/router';
@Component({
  selector: 'app-all-users-for-admin',
  standalone: true,
  imports: [],
  templateUrl: './all-users-for-admin.component.html',
  styleUrl: './all-users-for-admin.component.css'
})
export class AllUsersForAdminComponent implements OnInit {
  users: users[] = [];

  constructor(
    private admineSevice: adminService,
   private router : Router
  ) {}

  ngOnInit(): void {
    this.fetcher();
  }

  fetcher(): void {
    this.admineSevice.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }

  navigateToDetails( user : users) : void{
    this.router.navigate(['/studentDetail', user.id]);
  }

  
}