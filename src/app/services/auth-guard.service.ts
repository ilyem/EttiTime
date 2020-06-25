import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsersService } from './users.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private auth: UsersService, private router: Router) { }

  canActivate() {
    if (!true) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
