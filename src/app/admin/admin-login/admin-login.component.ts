import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { AdminService } from 'src/app/shared/service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  form = new FormGroup({
    login: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })
  
  constructor(private adminSvc: AdminService,private router: Router) {                                                                                                          localStorage.removeItem('token')
  }

  ngOnInit() {
  }

  onSubmit(){
    if(this.form.valid){
      
      this.adminSvc.login(this.form.value).subscribe((result)=>{
        let res = result.json();
        if(res.isAdmin){
          localStorage.setItem('token',res.token)
        }
        this.router.navigate(['admin'])
        Swal.fire(
          "Success",
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
