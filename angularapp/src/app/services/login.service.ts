import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor() { }
  role = '';
  public setRole(role: string) {
    this.role = role;
  }
  public isLoggedIn() {
    return this.role;
  }
  public logout() {
    this.role = '';
  }
}
