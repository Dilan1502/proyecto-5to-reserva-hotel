

/*import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const userString = localStorage.getItem('user');
    const user = userString ? JSON.parse(userString) : null;

    if (user) {
      // El usuario está autenticado, permitir el acceso
      return true;
    } else {
      
      this.router.navigate(['login']);
      return false;
    }
  }
}*/
