import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor() { }
  pass=''
  public user={
    username:'',
    password:'',
    email:'',
    mobileNumber:'',
    userRole:'',
  }
  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.user.username==''|| this.user.username==null || this.user.email==''|| this.user.email==null)
    {
      alert('Username or Email cannot be empty');
      return; 
    }
    else if(this.user.password!=this.pass)
    {
      alert('Passwords dont match');
      return;
    }
    localStorage.setItem('user',JSON.stringify(this.user));
  }
  clear()
  {
    this.user.email="";
    this.user.password="";
    this.user.email="";
    this.user.mobileNumber="";
    this.pass="";
    this.user.username=""
  }
}
