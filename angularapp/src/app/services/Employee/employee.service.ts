import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../url';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  employee:any;
  role:any;
  constructor(public http:HttpClient) { }
  public setEmployee(email:String)
  {
    this.employee=this.http.post(`${baseUrl}/login/{email}`,email);
    localStorage.setItem("employee",JSON.stringify(this.employee));
  }
  public setRole()
  {
    this.role=JSON.parse(localStorage.getItem('employee'))["role"];
    localStorage.setItem('role',this.role);
  }
  public getEmployee()
  {
    return JSON.parse(localStorage.getItem("employee"));
  }
}
