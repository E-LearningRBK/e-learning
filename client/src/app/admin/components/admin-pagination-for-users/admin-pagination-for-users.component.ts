import { Component, OnInit } from '@angular/core';
import { users } from '../../model/users.model';
import { AdminUserServiceService } from '../../service/admin-user-service.service';

@Component({
  selector: 'app-admin-pagination-for-users',
  standalone: true,
  imports: [],
  templateUrl: './admin-pagination-for-users.component.html',
  styleUrl: './admin-pagination-for-users.component.css'
})
export class AdminPaginationForUsersComponent implements OnInit {
  users: users[] = [];
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;
constructor(private AdminuserserviceService : AdminUserServiceService ){}

  onPageChange(page: number): void {
    this.currentPage = page;
  }

   ngOnInit(): void {
    this.fetchusers();
  }

  fetchusers(): void {
    this.AdminuserserviceService.getAllUsers().subscribe((users) => {
      this.users = users;
      this.totalPages = Math.ceil(this.users.length / this.pageSize);
    });
  }

 getPagUser(): users[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.users.slice(startIndex, endIndex);
  }
}
