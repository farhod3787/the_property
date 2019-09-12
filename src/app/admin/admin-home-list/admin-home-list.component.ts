import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
import { AnnouncService } from 'src/app/shared/service/annouenceService';

@Component({
  selector: 'app-admin-home-list',
  templateUrl: './admin-home-list.component.html',
  styleUrls: ['./admin-home-list.component.css']
})
export class AdminHomeListComponent implements OnInit {


  displayedColumns: string[] = [ 'elon_rate', 'user_name',  'area',  'elon_type', 'date', 'price', 'status','about'];
  dataSource;

  home = {}


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor( private annucService: AnnouncService) {
    this.getAnnounc()
   }

  ngOnInit() {
  }
  getAnnounc() {
    this.annucService.getAnn().subscribe( res =>{
      this.dataSource = new MatTableDataSource(res.json());
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  about(id) {
    this.annucService.get(id).subscribe( res =>{
      this.home = res.json()
    })
  }

  update(id, body) {
    this.annucService.patch(id, body).subscribe( res =>{
      if(res) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'Status updated',
         })
          this.getAnnounc()
      } 
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error in Updated Status',
         })
      } 
    
    })  
  }

  delete(id) {
    this.annucService.delete(id).subscribe( res =>{
      if(res) {
        Swal.fire({
          type: 'success',
          title: 'Done',
          text: 'Deleted',
         })
          this.getAnnounc()
      } 
      else {
        Swal.fire({
          type: 'error',
          title: 'Error',
          text: 'Error in Deleted',
         })
      } 
    })
  }


}
