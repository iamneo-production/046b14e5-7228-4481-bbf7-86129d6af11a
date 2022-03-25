import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Employee } from '../Employee/Employee';
import baseUrl from '../url';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  emp:Employee;
  constructor(private http:HttpClient,private snack:MatSnackBar) { }
  public getAllEmployees():Observable<Employee[]>
  {
    return this.http.get<Employee[]>(`${baseUrl}/admin`);
  }
  public getEmployees(id:number){
    this.http.get<Employee>(`${baseUrl}/admin/${id}`).subscribe(
      (data:any)=>{
        this.emp=data;
        localStorage.setItem("employee",JSON.stringify(this.emp));
      }
    )
  }

  public addEmployees(emp:Employee):Observable<string>{
    return this.http.post<string>(`${baseUrl}/admin`,emp);
  }
  public updateEmployees(emp:Employee):Observable<string>{
    return this.http.put<string>(`${baseUrl}/admin/${emp.id}`,emp);
  }
  public deleteEmployees(id:number):Observable<string>{
    return this.http.delete<string>(`${baseUrl}/admin/${id}`);
  }
}

