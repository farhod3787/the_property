import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminHomeListComponent } from './admin/admin-home-list/admin-home-list.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';


const routes: Routes = [
    { path: 'admin', component: AdminNavbarComponent, children : [
        { path: '', component: AdminHomeComponent},
        {path: 'home-list', component: AdminHomeListComponent},
        {path: 'user-list', component: AdminUserListComponent}
    ]}
]  


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }