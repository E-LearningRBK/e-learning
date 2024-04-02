import { Component, OnInit } from '@angular/core';
import {adminService} from "../../service/admin.service"
import { ActivatedRoute } from '@angular/router';
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
private  adminService : adminService,
private route : ActivatedRoute 
){}
ngOnInit(): void {
  this.fetchOneUser()
}

fetchOneUser() :void{
this.route.paramMap.subscribe((param)=>{
  this.userId = param.get('id')
this.adminService.getOneUser(this.userId).subscribe((res)=>{

  console.log("res:",res)
  this.user = res
})
})
}
}
