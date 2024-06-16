

import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { jwtDecode } from 'jwt-decode';
import { ExtendedJwtPayload } from '../models/users.model';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userString = localStorage.getItem('token');
    const decoded = jwtDecode<ExtendedJwtPayload>(userString!);
    console.log()
    
    if (decoded.rol=="ROLE_ADMIN") {
      return true;
    } else {
      this.router.navigate(['/']);
      return false;
    }
  }
}
