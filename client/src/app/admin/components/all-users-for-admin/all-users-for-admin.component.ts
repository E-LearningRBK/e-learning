import { Component, OnInit } from '@angular/core';
import { adminService } from '../../service/admin.service';
import { users } from '../../model/users.model';

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
   
  ) {}

  ngOnInit(): void {
    this.fetcher();
  }

  fetcher(): void {
    this.admineSevice.getAllUsers().subscribe((users) => {
      this.users = users;
    });
  }
}