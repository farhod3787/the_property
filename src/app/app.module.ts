import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule, 
  MatCheckboxModule,
  MatPaginatorModule,
  MatTableModule,
  MatSortModule,
  MatSelectModule
} from '@angular/material';



import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AppRoutingModule} from './app.routing-module';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';
import { AdminHomeListComponent } from './admin/admin-home-list/admin-home-list.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminHomeListComponent,
    AdminUserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule, 
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
