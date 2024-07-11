import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ManagerDashboardComponent } from './manager-dashboard/manager-dashboard.component';
import { StaffPortalComponent } from './staff-portal/staff-portal.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { RoleGuard } from './role.guard';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'manager', component: ManagerDashboardComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'manager' } },
  { path: 'staff', component: StaffPortalComponent, canActivate: [AuthGuard, RoleGuard], data: { role: 'staff' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
