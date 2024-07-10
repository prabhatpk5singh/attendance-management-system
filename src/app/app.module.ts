import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { StaffPortalComponent } from './staff-portal/staff-portal.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { WebcamModule } from 'ngx-webcam';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    ManagerDashboardComponent,
    StaffPortalComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    WebcamModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
