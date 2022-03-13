import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
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
    else
    {
      Swal.fire({
        title: 'Account Created',
        text: "Registration Successfull!",
        icon: 'success',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Go to Login!'
      }).then((result) => {
        if (result.isConfirmed) {
          this.router.navigate(['login']);
        }
      })
    }
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
