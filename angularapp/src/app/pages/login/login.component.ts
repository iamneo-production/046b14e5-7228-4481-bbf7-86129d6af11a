import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

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
  constructor(private router: Router,public loginService:LoginService) { }

  ngOnInit(): void {
  }
  validate() {
    console.log('Login button clicked');
    if (this.login.email.trim() == null || this.login.password.trim() == null || this.login.email.trim() == '' || this.login.password.trim() == '') {
      alert('Email or Password cannot be empty');
      return;
    }
    if (this.login.email == 'user' && this.login.password == 'user')
      {
        // this.router.navigate(['expense']);
      alert('Login Sucessfull');
      this.loginService.setRole('user');
      this.router.navigate(['expenses']);
      }
      else if(this.login.email == 'manager' && this.login.password == 'manager')
      {
        alert('Login Sucessfull');
        this.loginService.setRole('manager');
      }
      else if(this.login.email == 'admin' && this.login.password == 'admin')
      {
        alert('Login Sucessfull');
        this.loginService.setRole('admin');
      }
      else
      {
        alert('Invalid Credentials');
      }
  }
  clear() {
    this.login.email = '';
    this.login.password = '';
  }
}
