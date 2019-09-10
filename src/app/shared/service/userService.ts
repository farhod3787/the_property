import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class UserService {
  
    constructor(private http: Http) { 

    }

    url="http://localhost:3000/api/user";


    getUsers() {
        return this.http.get(this.url + '/')
    }

    delete(id) {
      return this.http.delete(this.url + '/' + id)
    }

    getUser(id) {
      return this.http.get(this.url + '/view/' + id)
    }




}