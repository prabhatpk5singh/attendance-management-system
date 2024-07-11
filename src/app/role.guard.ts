import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const expectedRole = route.data['role'];
    const currentRole = this.authService.getRole();

    if (this.authService.isLoggedIn() && currentRole === expectedRole) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
