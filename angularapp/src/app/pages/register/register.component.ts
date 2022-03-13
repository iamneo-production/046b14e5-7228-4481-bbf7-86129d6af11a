import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public snack:MatSnackBar,public router:Router) { }
  pass_match=true
  pass=''
  public user={
    username:'',
    password:'',
    email:'',
    mobilenumber:'',
    userRole:'',
  }
  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.user.username==''|| this.user.username==null || this.user.email==''|| this.user.email==null)
    {
      this.snack.open("Mandatory fields cannot be empty","ok",{
        duration:3000,
      });
      return; 
    }
    else if(this.user.password!=this.pass)
    {
      this.pass_match=false;
      this.snack.open("Passwords Don't Match!","ok",{
        duration:3000,
      });
      return;
    }
    localStorage.setItem('user',JSON.stringify(this.user));
  }
  clear()
  {
    this.user.email="";
    this.user.password="";
    this.user.email="";
    this.user.mobilenumber="";
    this.pass="";
    this.user.username="";
    this.pass_match=true;
  }
}
