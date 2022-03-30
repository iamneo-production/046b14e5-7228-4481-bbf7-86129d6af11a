import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { AdminService } from '../admin/admin.service';
import { EmployeeService } from '../Employee/employee.service';
import { ExpenseService } from '../expense/expense.service';
import { ManagerService } from '../manager/manager.service';
import baseUrl from '../url';
import { Login } from './Login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  status = false;
  constructor(private expeneService:ExpenseService,private router: Router, public http: HttpClient, public snack: MatSnackBar, private empService: EmployeeService, private adminService: AdminService ,private managerService:ManagerService) { }
  public login(login: Login) {
    return this.http.post<Boolean>(`${baseUrl}/login`, login).subscribe(
      (data: boolean) => {
        if (data == true) {
          this.setStatus(true);
          this.setRole(login.email);
          sessionStorage.setItem("email", login.email);
          Swal.fire({
            title: 'Welcome',
            text: "Login Success!",
            icon: 'success',
            showCancelButton: false,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'OK'
          }).then((result) => {
            if (result.isConfirmed) {
              this.route();
            }
          });
        }
        else {
          this.snack.open("Invalid Credentials", "OK", {
            duration: 3000,
          });
        }
      },
      (error: HttpErrorResponse) => {
        this.snack.open("User Does Not exist", "OK", {
          duration: 3000,
        });
      }
    );
  }
  route() {
    let role = sessionStorage.getItem("role");
    this.router.navigate([role]);
  }
  public setStatus(s: boolean) {
    this.status = s;
  }
  public isLoggedIn() {
    this.status;
  }
  public logout() {
    localStorage.clear();
    this.status = false;
  }
  public setRole(email: string) {
    this.http.get<Login>(`${baseUrl}/login/${email}`).subscribe(
      (data: Login) => {
        sessionStorage.setItem("role", data.role);
        if (data.role == "admin") {
          this.adminService.setAllEmployees();
        }
        else if(data.role=="manager")
        {
          this.empService.setEmployee(data.email);
          this.managerService.setAllExpenses();
          this.empService.setAllEmployees();
        }
        else if(data.role=="employee")
        {
          this.empService.setEmployee(data.email);
        }
      },
      (error: HttpErrorResponse) => {
        console.log(error);
      }
    );
  }
}
