import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../Employee/Employee';
import baseUrl from '../url';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(public http:HttpClient) { }
  emp={
    id:null,
    active:null,
    email:null,
    mobileNumber:null,
    password:null,
    role:null,
    username:null,
  };
  public login(login:any):Observable<Boolean>
  {
    return this.http.post<Boolean>(`${baseUrl}/login`,login);
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
  public setRole(){
    this.emp=JSON.parse(localStorage.getItem("employee"));
    localStorage.setItem('role',this.emp.role);
  }
}
