import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import Swal from 'sweetalert2';
import { AdminService } from '../admin/admin.service';
import { ExpenseService } from '../expense/expense.service';

import baseUrl from '../url';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  role: string;
  emp: Employee;
  employees:Employee[];
  constructor(public snack:MatSnackBar,public http: HttpClient, private router: Router, private adminService: AdminService, private expenseService: ExpenseService) { }
  public setEmployee(email: string){
    this.http.get<Employee>(`${baseUrl}/employee/${email}`).subscribe(
      (data:Employee)=>{
        this.emp=data;
        this.expenseService.setExpense(this.emp.id);
        this.expenseService.setCurrentExpenses(this.emp.id);
      },
      (error)=>{
        this.snack.open("Something Went Wrong","OK",{duration:3000});
      }
    );    
  }
  public setAllEmployees() {
    this.http.get<Employee[]>(`${baseUrl}/manager/emp`).subscribe(
    (data:Employee[])=>{
      this.employees=data;
    },
    (error)=>{
      this.snack.open("Something Went Wrong","OK",{duration:3000});
    }
    );
  }
  public getEmployee()
  {
    return this.emp;
  }
  public getAllEmp()
  {
    return this.employees;
  }
}
