import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { StaffPortalComponent } from './staff-portal/staff-portal.component';

const routes: Routes = [
  { path: 'manager', component: ManagerDashboardComponent },
  { path: 'staff', component: StaffPortalComponent },
  { path: '', redirectTo: '/staff', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
