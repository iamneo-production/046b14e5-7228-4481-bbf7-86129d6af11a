import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { ViewemployeeComponent } from '../viewemployee/viewemployee.component';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pass='';
  pass_match=true;
  constructor(private snack:MatSnackBar,private employeeService:EmployeeService,public dialog:MatDialog) { }
  employee = [
    {
      username: 'Ms.J.seetha',
      email: 'seetha123@gmail.com',
      password: 'seth123',
      role: 'employee',
      active:true,
      mobileNumber:987654321
    },
    {
      username: 'Ms.arthi',
      email: 'seetha123@gmail.com',
      password: 'seth123',
      role: 'employee',
      active:true,
      mobileNumber:987654321
    },
    {
      username: 'Ms.ramya',
      email: 'seetha123@gmail.com',
      password: 'seth123',
      role: 'employee',
      active:true,
      mobileNumber:987654321
    },
    {
      username: 'Ms.bindu',
      email: 'seetha123@gmail.com',
      password: 'seth123',
      role: 'employee',
      active:true,
      mobileNumber:987654321
    },
    {
      username: 'Ms.hari',
      email: 'seetha123@gmail.com',
      password: 'seth123',
      role: 'employee',
      active:true,
      mobileNumber:987654321
    },
    {
      username: 'Ms.J.seetha',
      email: 'seetha123@gmail.com',
      password: 'seth123',
      role: 'employee',
      active:true,
      mobileNumber:987654321
    }
  ];

  emp={
    id:null,
    active:null,
    email:null,
    mobileNumber:null,
    password:null,
    role:null,
    username:null,
  };
 
  ngOnInit(): void {
  }
  formSubmit(){
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
      this.snack.open("Passwords Don't Match","OK");
    }
    this.snack.open("user added","ok");
  }
  view(empl:any)
  {
    this.employeeService.setView(empl);
    const dialogRef = this.dialog.open(ViewemployeeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
}
