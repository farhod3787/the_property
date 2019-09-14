import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: Http) { }
  url = "http://localhost:3000/api/admin"
  
  create(body){
    return this.http.post( this.url + "/post" ,body)
  }
  
  login(body){
    return this.http.post( this.url + "/sign", body )
  }

  isAdmin(){
    let token = "undefined"
    if(localStorage.getItem('token')){
      token = localStorage.getItem('token')
    }
    
    return this.http.get( this.url + "/verifyAdmin/" + token );
  }

  verify(){
    return this.http.get(this.url + "/verify")
  }


}
