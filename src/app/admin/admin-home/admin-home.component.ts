import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/userService';
import { AnnouncService } from 'src/app/shared/service/annouenceService';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  users = [];
  announcs = []

  q =0
  a = 0;
  constructor(
    private router: Router,
    private userService: UserService,
    private announcService : AnnouncService
    
    ) { 
        this.allUsers();
        this.allAnnouncs();
    }

    allUsers() {
        this.userService.getUsers().subscribe ( res =>{
          this.users = res.json().length
        })
    }

    allAnnouncs() {
      this.announcService.getAnn().subscribe( res =>{
        this.announcs = res.json()
        for ( let i=0; i<=this.announcs.length; i++) {
          if (this.announcs[i].status) {
            this.q++
          }          
          else {
            this.a++
          }
        }
      }
        )
    }

  ngOnInit() {
  }
 

}
