import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserTypeGuardService implements CanActivate {

  constructor() { }

  canActivate() {
    return true
  }
}
