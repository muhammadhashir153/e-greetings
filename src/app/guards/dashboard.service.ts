import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class DashboardGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = sessionStorage.getItem('Role');
    if (!role) {
      // If Role does not exist, redirect to login
      this.router.navigate(['/authentication/login']);
      return false;
    }
    return true; // Allow navigation to the dashboard
  }
}
