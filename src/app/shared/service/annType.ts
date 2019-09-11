import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class AnnouncementService {
  
    constructor(private http: Http) { 

    }

    url="http://localhost:3000/api/announcement_type";

    post(body) {
        return this.http.post(this.url + '/create', body)
    }

    getAnnType() {
        return this.http.get(this.url + '/')
    }

    delete(id) {
      return this.http.delete(this.url + '/' + id)
    }

}