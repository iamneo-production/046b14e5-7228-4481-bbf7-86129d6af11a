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
    role:'employee'
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
    else 
      {
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
            this.router.navigate(['login']);
          }
        })
      }
  }
}
