import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http'
import { HttpClient, HttpClientModule } from '@angular/common/http';


import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {NgxMaskModule} from 'ngx-mask'

import {
  MatInputModule,
  MatFormFieldModule,
  MatButtonModule,
  MatCardModule, 
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
import { AdminInformationComponent } from './admin/admin-information/admin-information.component';
import { AdminInformHouseComponent } from './admin/admin-inform-house/admin-inform-house.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminRegisterComponent } from './admin/admin-register/admin-register.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { AdminCreateComponent } from './admin/admin-create/admin-create.component';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminFooterComponent,
    AdminHomeListComponent,
    AdminUserListComponent,
    AdminInformationComponent,
    AdminInformHouseComponent,
    AdminLoginComponent,
    AdminRegisterComponent,
    AdminCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule, 
    MatCheckboxModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatSelectModule,
    HttpClientModule,
    NgxMaskModule.forRoot(),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient]
      }
  }) 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
