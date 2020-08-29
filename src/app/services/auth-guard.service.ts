import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { UsersService } from './users.service';

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private usersService: UsersService, private router: Router) { }

  canActivate() {
    if (!this.usersService.getToken()) {
      this.router.navigateByUrl('/');
      return false;
    }
    return true;
  }
}
