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


}
