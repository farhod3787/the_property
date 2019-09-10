import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
@Injectable({
    providedIn: 'root'
  })
  export class RegionService {
  
    constructor(private http: Http) { 

    }

    url="http://localhost:3000/api/region";

    post(body) {
        return this.http.post(this.url + '/create', body)
    }

    getRegions() {
        return this.http.get(this.url + '/')
    }

    delete(id) {
      return this.http.delete(this.url + '/' + id)
    }

}