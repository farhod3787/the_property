import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';


const routes: Routes = [
    { path: 'admin', component: AdminNavbarComponent, children : [
        { path: '', component: AdminHomeComponent}
    ]}
]  


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }