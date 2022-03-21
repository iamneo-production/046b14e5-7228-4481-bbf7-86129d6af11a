import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from '../url';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  email:string;
  role:string;
  constructor(public http:HttpClient) { }
  public setEmployee()
  {
    this.http.get<Employee>(`${baseUrl}/login/${this.email}`).subscribe(
      (data:any)=>{
        localStorage.setItem("employee",JSON.stringify(data));
      }
    );
  }
  public setEmail(email:string)
  {
    this.email=email;
  }
  public setView(empl:Employee){
    localStorage.setItem("emp",JSON.stringify(empl));
  }
}
