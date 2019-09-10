import { Component, OnInit } from '@angular/core';
import { RegionService } from 'src/app/shared/service/regionService';

import { MatTableDataSource} from  '@angular/material/table'

import Swal from 'sweetalert2'

export interface PeriodicElement {
  name: string;
}
 

@Component({
  selector: 'app-admin-information',
  templateUrl: './admin-information.component.html',
  styleUrls: ['./admin-information.component.css']
})
export class AdminInformationComponent implements OnInit {
 
  displayedColumns: string[] = ['id', 'name', 'delete'];
  dataSource;

  constructor( private regionService: RegionService) {
    this.getRegions()
   }

   getRegions() {
     this.regionService.getRegions().subscribe( res =>{
      console.log(res.json())
    })
   }

  ngOnInit() {
  }

  addRegion(value){
      this.regionService.post({name: value}).subscribe( result =>{
        if(result) {
          Swal.fire({
            type: 'success',
            title: 'Done',
            text: 'New Region Add',
           })
            this.getRegions()
        } 
        else {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'Error in Add new Region',
           })

        } 
      })
  }

}

 

 