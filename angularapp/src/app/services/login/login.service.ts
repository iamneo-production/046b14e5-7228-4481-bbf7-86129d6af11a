import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http:HttpClient) { }
  public login(login:any)
  {
    return this.http.post(`${baseUrl}/login`,login);
  }
  public setStatus(s:any)
  {
    localStorage.setItem('login',s);
  }
  public isLoggedIn()
  {
    return localStorage.getItem('login');
 
  }
  public logout()
  {
    localStorage.clear();
  }
}
