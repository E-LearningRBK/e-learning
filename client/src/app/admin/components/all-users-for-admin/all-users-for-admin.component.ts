import { Component, OnInit } from '@angular/core';
import { AdminUserServiceService } from '../../service/admin-user-service.service';
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
  pageSize: number = 10;
  currentPage: number = 1;
  totalPages: number = 1;

  constructor(
    private AdminUserServiceService: AdminUserServiceService,
   private router : Router
  ) {}

  ngOnInit(): void {
    this.fetcher();
  }

  fetcher(): void {
    this.AdminUserServiceService.getAllUsers().subscribe((users) => {
      this.users = users;
      this.totalPages = Math.ceil(this.users.length / this.pageSize);
    });
  }

  navigateToDetails( user : users) : void{
    this.router.navigate(['/admin/studentDetail', user.id]);
  }

  onPageChange(page: number): void {
    this.currentPage = page;
  }

  getpagUser(): users[] {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    const endIndex = startIndex + this.pageSize;
    return this.users.slice(startIndex, endIndex);
  }
  
}