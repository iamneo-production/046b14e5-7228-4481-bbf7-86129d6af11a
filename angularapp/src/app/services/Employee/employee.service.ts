import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { ExpenseService } from '../expense/expense.service';

import baseUrl from '../url';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  role: string;
  constructor(public snack:MatSnackBar,public http: HttpClient, private router: Router, private adminService: AdminService, private expenseService: ExpenseService) { }
  public setEmployee(email: string){
    this.http.get<Employee>(`${baseUrl}/employee/${email}`).subscribe(
      (data:Employee)=>{
        sessionStorage.setItem("emp",JSON.stringify(data));
        this.expenseService.setExpense(data.id);
        this.expenseService.setCurrentExpenses(data.id);
      },
      (error)=>{
        this.snack.open("Something Went Wrong","OK",{duration:3000});
      }
    );    
  }
  public setAllEmployees() {
    this.http.get<Employee[]>(`${baseUrl}/manager/emp`).subscribe(
    (data:Employee[])=>{
      sessionStorage.setItem("Allemp",JSON.stringify(data));
    },
    (error)=>{
      this.snack.open("Something Went Wrong","OK",{duration:3000});
    }
    );
  }
  public getEmployee()
  {
    return JSON.parse(sessionStorage.getItem("emp"));
  }
  public getAllEmp()
  {
    return JSON.parse(sessionStorage.getItem("Allemp"));
  }
}
