import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminHomeListComponent } from './admin/admin-home-list/admin-home-list.component';
import { AdminUserListComponent } from './admin/admin-user-list/admin-user-list.component';
import { AdminInformationComponent } from './admin/admin-information/admin-information.component';
import { AdminInformHouseComponent } from './admin/admin-inform-house/admin-inform-house.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component'

const routes: Routes = [
    { path: 'admin', component: AdminNavbarComponent, children : [
        { path: '', component: AdminHomeComponent},
        {path: 'home-list', component: AdminHomeListComponent},
        {path: 'user-list', component: AdminUserListComponent},
        {path: 'inform-list', component: AdminInformationComponent},
        {path: 'inform-house', component: AdminInformHouseComponent},
        { path: 'create', component: AdminCreateComponent }
    ]},
    { path: 'admin/login' , component: AdminLoginComponent },
    { path: 'admin/register' , component: AdminRegisterComponent }
]  


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }