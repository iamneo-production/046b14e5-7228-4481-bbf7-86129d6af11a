import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
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
  search="Name";
  searchVal="";
  emp={
    id:null,
    active:null,
    email:null,
    mobileNumber:null,
    password:null,
    role:null,
    username:null,
  };
  employee:any;
  constructor(public router:Router, private snack:MatSnackBar,private employeeService:EmployeeService,public dialog:MatDialog) { }
  ngOnInit(): void {
    this.employee = [
      {
        id:1,
        username: 'Ms.J.seetha',
        email: 'seetha123@gmail.com',
        password: 'seth123',
        role: 'employee',
        active:true,
        mobileNumber:987654321
      },
      {
        id:16,
        username: 'Ms.arthi',
        email: 'arthi123@gmail.com',
        password: 'seth123',
        role: 'employee',
        active:true,
        mobileNumber:987654321
      },
      {
        id:10,
        username: 'Ms.ramya',
        email: 'ramya123@gmail.com',
        password: 'seth123',
        role: 'employee',
        active:true,
        mobileNumber:987654321
      },
      {
        id:13,
        username: 'Ms.bindu',
        email: 'bindu123@gmail.com',
        password: 'seth123',
        role: 'employee',
        active:true,
        mobileNumber:987654321
      },
      {
        id:12,
        username: 'Ms.hari',
        email: 'hari123@gmail.com',
        password: 'seth123',
        role: 'employee',
        active:true,
        mobileNumber:987654321
      },
      {
        id:11,
        username: 'Ms.J.priya',
        email: 'priya123@gmail.com',
        password: 'seth123',
        role: 'employee',
        active:true,
        mobileNumber:987654321
      }
    ];
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
  Search()
  {
    this.ngOnInit();
    if(this.search=="Name")
    {
      this.employee=this.employee.filter(res=>{
        return res.username.toLocaleLowerCase().match(this.searchVal.toLocaleLowerCase());
      });
    }
    if(this.search=="Email")
    {
      this.employee=this.employee.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.searchVal.toLocaleLowerCase());
      });
    }
  }
  reset()
  {
    this.searchVal="";
    this.ngOnInit();
  }
}
