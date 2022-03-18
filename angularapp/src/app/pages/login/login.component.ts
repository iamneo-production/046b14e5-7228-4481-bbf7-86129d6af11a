import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {  Router } from '@angular/router';
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
  constructor(private router: Router, public loginService: LoginService, public snack: MatSnackBar,private empService:EmployeeService) { }

  ngOnInit(): void {
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
            this.router.navigate(['expenses']);
          }
        });
        this.empService.setEmployee(this.login.email);
        this.loginService.setStatus(true);
        this.route();
      },
      (error) => {
        this.snack.open("Invalid Credentials","OK");
        // this.clear();
      }
    );

  }
  route()
  {
    let role=localStorage.getItem('role');
    if(role=="Employee")
    this.router.navigate(['expenses']);
    else if(role=="Manager")
    this.router.navigate(['manager']);
    else if(role=="Admin")
    this.router.navigate(['admin']);
  }
  clear() {
    this.login.email = '';
    this.login.password = '';
  }
}
