import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { LoginService } from 'src/app/services/login/login.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public login = {
    email: '',
    password: '',
  }
  constructor(private router: Router, public loginService: LoginService, public snack: MatSnackBar, private empService: EmployeeService ,private adminService:AdminService) { }

  ngOnInit(): void {
    localStorage.clear();
  }
  validate() {
    console.log('Login button clicked');
    if (this.login.email.trim() == null || this.login.password.trim() == null || this.login.email.trim() == '' || this.login.password.trim() == '') {
      this.snack.open("Email or Password cannot be empty", "ok", {
        duration: 3000,
      })
      return;
    }
    this.loginService.login(this.login).subscribe(
      (data: boolean) => {
        if (data == true) {
          this.empService.setEmail(this.login.email);
          this.empService.setEmployee();
          this.loginService.setStatus(true);
          this.adminService.getAllEmployees();
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
          this.snack.open("Invalid Credentials", "OK",{
            duration:3000,
          });
        }
      },
      (error: HttpErrorResponse) => {
        this.snack.open("User Does Not exist", "OK",{
          duration:3000,
        });
      }
    );

  }
  route() {
    this.loginService.setRole();
    let role = localStorage.getItem('role');
    if (role == "employee")
      this.router.navigate(['employee']);
    else if (role == "manager")
      this.router.navigate(['manager']);
    else if (role == "admin")
    {
      this.adminService.getAllEmployees();
      this.router.navigate(['admin']);
    }
  }
  clear() {
    this.login.email = '';
    this.login.password = '';
  }
}
