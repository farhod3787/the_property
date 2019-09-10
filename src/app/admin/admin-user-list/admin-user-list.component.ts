import { Component, OnInit, ViewChild } from '@angular/core';
import Swal from 'sweetalert2'


import {MatTableDataSource} from '@angular/material/table';
import { MatPaginator, MatSort } from '@angular/material';
import { UserService } from 'src/app/shared/service/userService';

@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.css']
})
export class AdminUserListComponent implements OnInit {


  displayedColumns: string[] = [ 'id', 'name', 'email',  'number',  'avatar', 'delete'];
  dataSource;


  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private userService: UserService) {
        this.getUsers()
   }

   getUsers() {
    this.userService.getUsers().subscribe( result =>{
      console.log(result.json())
      this.dataSource = new MatTableDataSource(result.json()); 
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })
   }


  ngOnInit() {
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  delete(id) {
      this.userService.delete(id).subscribe(result =>{
          if(result)  {
            Swal.fire({
              type: 'success',
              title: 'Done',
              text: 'User deleted',
             })
              this.getUsers()
          }
          else {
            Swal.fire({
              type: 'error',
              title: 'Error',
              text: 'Error in deleted User',
             })
          }
      }) 
  }


}
