import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class AnnouncService {
  
    constructor(private http: Http) { 

    }

    url="http://localhost:3000/api/announcement";

    post(body) {
        return this.http.post(this.url + '/create', body)
    }

    getAnn() {
        return this.http.get(this.url + '/')
    }

    delete(id) {
      return this.http.delete(this.url + '/' + id)
    }

    patch(id, body) {
        return this.http.patch(this.url + '/' + id, body)
    }

    get(id) {
      return this.http.get(this.url + '/view/' + id)
    }


}