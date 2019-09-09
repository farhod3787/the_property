import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'

import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';

@Component({
  selector: 'app-admin-home-list',
  templateUrl: './admin-home-list.component.html',
  styleUrls: ['./admin-home-list.component.css']
})
export class AdminHomeListComponent implements OnInit {


  displayedColumns: string[] = [ 'elon_rate', 'user_name',  'area',  'elon_type', 'date', 'price', 'about'];
  dataSource;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor() { }

  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }


}
