import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/service/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  constructor(private adminSvc: AdminService, private router: Router) { 
    this.isAdmin()
  }

  ngOnInit() {
  }
  
  isAdmin(){
    this.adminSvc.isAdmin().subscribe((result)=>{
      let data = result.json();
      
      if(!data.isAdmin){
        this.router.navigate(['admin/login'])
        Swal.fire(
          "Bad request",
          "",
          "error"
        )
      }
      
    },()=>{
      this.router.navigate(['admin/login'])
      Swal.fire(
        "Bad request",
        "",
        "error"
      )
    })
  }


}
