import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from '../admin/admin.service';
import { ExpenseService } from '../expense/expense.service';
import { ManagerService } from '../manager/manager.service';

import baseUrl from '../url';
import { Employee } from './Employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  role: string;
  constructor(private managerService: ManagerService, public snack: MatSnackBar, public http: HttpClient, private router: Router, private adminService: AdminService, private expenseService: ExpenseService) { }
  public setEmployee(email: string) {
    this.http.get<Employee>(`${baseUrl}/employee/${email}`).subscribe(
      (data: Employee) => {
        if (data.active == false) {
          sessionStorage.setItem("role", "notAuthorized");
          return;
        }
        else {
          sessionStorage.setItem("role", data.role);
          if (data.role == "admin") {
            this.adminService.setAllEmployees();
          }
          else if (data.role == "manager") {
            this.expenseService.setExpense(data.email);
            this.managerService.setAllExpenses();
            this.expenseService.setCurrentExpenses(data.email);
            this.setAllEmployees();
          }
          else if (data.role =="employee") {
            this.expenseService.setExpense(data.email);
            this.expenseService.setCurrentExpenses(data.email);
          }
          sessionStorage.setItem("emp", JSON.stringify(data));
          this.router.navigate([data.role]);
        }
      },
      (error) => {
        this.snack.open("Something Went Wrong", "OK", { duration: 3000 });
      }
    );
  }
  public setAllEmployees() {
    this.http.get<Employee[]>(`${baseUrl}/manager/emp`).subscribe(
      (data: Employee[]) => {
        sessionStorage.setItem("Allemp", JSON.stringify(data));
      },
      (error) => {
        this.snack.open("Something Went Wrong", "OK", { duration: 3000 });
      }
    );
  }
  public getEmployee() {
    return JSON.parse(sessionStorage.getItem("emp"));
  }
  public getAllEmp() {
    return JSON.parse(sessionStorage.getItem("Allemp"));
  }
}
