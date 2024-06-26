import { Component, OnInit } from '@angular/core';
import {AdminUserServiceService} from "../../service/admin-user-service.service"
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-student-detail',
  standalone: true,
  imports: [],
  templateUrl: './student-detail.component.html',
  styleUrl: './student-detail.component.css'
})
export class StudentDetailComponent implements OnInit {
user : any
userId : any

constructor(
private  AdminUserServiceService : AdminUserServiceService,
private route : ActivatedRoute ,
private router : Router
){}
ngOnInit(): void {
  this.fetchOneUser()
}

fetchOneUser() :void{
this.route.paramMap.subscribe((param)=>{
  this.userId = param.get('id')
this.AdminUserServiceService.getOneUser(this.userId).subscribe((res)=>{

  console.log("res:",res)
  this.user = res
})
})
}

navigateToUser():void{
  this.router.navigate(['/admin/AllUsersForAdmin'])
}

}
