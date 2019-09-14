import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';
import { Router } from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admin-create',
  templateUrl: './admin-create.component.html',
  styleUrls: ['./admin-create.component.css']
})
export class AdminCreateComponent implements OnInit {

  constructor(private adminSvc: AdminService,private router: Router) { }

  ngOnInit() {
  }

  add(a,b,c){
    if(a != "" && b != "" && c != ""){
      this.adminSvc.create({ username: a,login: b, password: c }).subscribe((result)=>{
        let data = result.json();
        if(data.allow){
          localStorage.setItem('token',data.token)
        }
        this.router.navigate(['admin'])
        Swal.fire(
          "Admin Created",
          "",
          "success"
        )
      },()=>{
        Swal.fire(
          "Bad request",
          "",
          "error"
        )
      })
    }
  }
}
