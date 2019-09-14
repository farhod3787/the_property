import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/userService';
import { AnnouncService } from 'src/app/shared/service/annouenceService';

import { TranslateService } from '@ngx-translate/core';


@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {


  langs = [ 'RUS', 'ENG'];

  users = [];
  announcs = []

  q =0
  a = 0;
  constructor(
    private router: Router,
    private userService: UserService,
    private announcService : AnnouncService,
    public translate: TranslateService
    
    ) { 
        this.allUsers();
        this.allAnnouncs();

        translate.addLangs(['en', 'ru', 'uz']);
        translate.setDefaultLang('RUS');
        const browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|ru/) ? browserLang : 'en');
        translate.getLangs();
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
