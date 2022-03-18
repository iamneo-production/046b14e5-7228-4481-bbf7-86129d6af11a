import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../url';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  role:any;
  constructor(public http:HttpClient) { }
  public setEmployee(email:String)
  {

    console.log(this.http.get(`${baseUrl}/login/{${email}}`));
    
    // localStorage.setItem('employee',JSON.stringify(this.http.get(`${baseUrl}/login/{${email}}`)));
  }
  public setRole()
  {
    this.role=JSON.parse(localStorage.getItem('employee'))["role"];
    localStorage.setItem('role',this.role);
  }
  public getEmployee()
  {
    return JSON.parse(localStorage.getItem('employee'));
  }
}
