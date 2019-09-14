import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from 'src/app/shared/service/admin.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  form = new FormGroup({
    username: new FormControl('',Validators.required),
    login: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required)
  })

  constructor(private adminSvc: AdminService,private router: Router ) { 
    this.verifyAdmin()
  }

  ngOnInit() {
  }

  onSubmit(a){
    if(this.form.valid && a.checked){
      // console.dir(a);
      this.adminSvc.create(this.form.value).subscribe((result)=>{
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

  verifyAdmin(){
    this.adminSvc.verify().subscribe((result)=>{
      let data = result.json()

      if(!data.allow){
        this.router.navigate(['admin/login'])
      }

    },()=>{
      this.router.navigate(['admin/login'])
    })
  }

}
