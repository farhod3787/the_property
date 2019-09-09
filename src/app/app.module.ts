import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AdminHomeComponent } from './admin/admin-home/admin-home.component';
import { AppRoutingModule} from './app.routing-module';
import { AdminNavbarComponent } from './admin/admin-navbar/admin-navbar.component';
import { AdminFooterComponent } from './admin/admin-footer/admin-footer.component';


@NgModule({
  declarations: [
    AppComponent,
    AdminHomeComponent,
    AdminNavbarComponent,
    AdminFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
