import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const role = sessionStorage.getItem('Role');
    if (role == 'admin') {
      // If Role exists, redirect to Dashboard
      this.router.navigate(['/dashboard']);
      return false;
    }
    return true; // Allow navigation to the target route
  }
}
