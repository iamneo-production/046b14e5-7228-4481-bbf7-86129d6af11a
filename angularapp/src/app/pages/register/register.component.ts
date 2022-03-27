import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { SignupService } from 'src/app/services/signup/signup.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public snack:MatSnackBar,public router:Router,private signupService:SignupService){}
  emp={
    username:'',
    password:'',
    email:'',
    mobileNumber:'',
    role:'manager'
  };
  pass:'';
  pass_match=true;
  ngOnInit(): void {
  }

  formSubmit()
  {
    if(this.emp.username==''|| this.emp.username==null || this.emp.email==''|| this.emp.email==null)
    {
      this.snack.open("Mandatory fields cannot be empty","ok",{
        duration:3000,
      });
      return; 
    }
    if(this.emp.password!=this.pass)
    {
      this.pass_match=false;
      this.snack.open("Passwords Don't Match","OK",{
        duration:3000,
      });
    }

    this.signupService.saveUser(this.emp).subscribe(
      (data:boolean)=>{
        if(data==true)
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
          });
        }
        else
        {
          Swal.fire({
            title: 'Email  is already linked with an Account!!',
            text: "Please try logging in",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Go to Login!'
          }).then((result) => {
            if (result.isConfirmed) {
              this.router.navigate(['login']);
            }
          });
        }
      },
      (error)=>{
        this.snack.open("Something Went Wrong","ok",{
          duration:3000,
        });
      }
    )
  }
  clear()
  {
    this.emp.email="";
    this.emp.password="";
    this.emp.email="";
    this.emp.mobileNumber="";
    this.pass="";
    this.emp.username="";
  }
}
