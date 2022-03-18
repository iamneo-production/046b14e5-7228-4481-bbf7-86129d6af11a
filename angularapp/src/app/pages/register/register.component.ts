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

  constructor(public snack:MatSnackBar,public router:Router,private signupService:SignupService) { }
  pass_match=true
  pass=''
  public user={
    username:'',
    password:'',
    email:'',
    mobileNumber:'',
    role:'Employee',
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

    this.signupService.saveUser(this.user).subscribe(
      (data:any)=>{
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
          })
        }
        else
        {
          this.snack.open("Passwords Don't Match!","ok",{
            duration:3000,
          });
        }
      }
    )
  }
  clear()
  {
    this.user.email="";
    this.user.password="";
    this.user.email="";
    this.user.mobileNumber="";
    this.pass="";
    this.user.username="";
    this.pass_match=true;
  }
}
