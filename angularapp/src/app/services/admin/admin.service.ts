import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from '../Employee/Employee';
import baseUrl from '../url';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  emp:Employee;
  empList:Employee[];
  constructor(private http:HttpClient,private snack:MatSnackBar) { }
  public getAllEmployees(){
    this.http.get<Employee[]>(`${baseUrl}/admin`).subscribe(
      (data:any)=>{
        this.empList=data;
        localStorage.setItem("employeeList",JSON.stringify(this.emp));
      }
    )
  }
  public getEmployees(id:number){
    this.http.get<Employee>(`${baseUrl}/admin/${id}`).subscribe(
      (data:any)=>{
        this.emp=data;
        localStorage.setItem("employee",JSON.stringify(this.emp));
      }
    )
  }
  public addEmployees(emp:Employee){
    this.http.post(`${baseUrl}/admin`,emp).subscribe(
      (data:any)=>{
        console.log(data);
        
      },
      (error)=>
      {
        this.snack.open("something went wrong","ok");
      }
    );
  }
  public updateEmployees(emp:Employee){
    this.http.put<String>(`${baseUrl}/admin`,emp);
  }
  public deleteEmployees(id:number){
    this.http.delete<String>(`${baseUrl}/admin/${id}`);
  }
}

