import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service.component';
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
  constructor(private router: Router,public loginService:LoginService,public snack:MatSnackBar) { }

  ngOnInit(): void {
  }
  validate() {
    console.log('Login button clicked');
    if (this.login.email.trim() == null || this.login.password.trim() == null || this.login.email.trim() == '' || this.login.password.trim() == '') {
      this.snack.open("Email or Password cannot be empty","ok",{
        duration:3000,
      })
      return;
    }
    if (this.login.email == 'user' && this.login.password == 'user')
      {
      //  Swal.fire('sucess','Login Sucessfull','success');
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
      })
      this.loginService.setRole('user');
      
      }
      else if(this.login.email == 'manager' && this.login.password == 'manager')
      {
        Swal.fire('sucess','Login Sucessfull','success');
        this.loginService.setRole('manager');
      }
      else if(this.login.email == 'admin' && this.login.password == 'admin')
      {
        Swal.fire('Welcome','Login Sucessfull','success');
        this.loginService.setRole('admin');
        this.router.navigate(['admin']);
      }
      else
      {
        this.snack.open("INVALID CREDENTIALS!!!!   Try Again","ok",{
          duration:3000,
        });
        this.clear();
      }
  }
  clear() {
    this.login.email = '';
    this.login.password = '';
  }
}