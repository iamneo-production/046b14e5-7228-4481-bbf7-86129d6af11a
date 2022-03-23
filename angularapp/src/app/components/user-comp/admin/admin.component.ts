import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Employee } from 'src/app/services/Employee/Employee';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { DeleteEmployeeComponent } from '../../delete-employee/delete-employee.component';
import { EditEmployeeComponent } from '../../edit-employee/edit-employee.component';
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
  empl:Employee[]=[];
  constructor(private adminService:AdminService, public router:Router, private snack:MatSnackBar,private employeeService:EmployeeService,public dialog:MatDialog) { }
  ngOnInit(): void {
    this.adminService.getAllEmployees();
    this.setEmployees();
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
    this.adminService.addEmployees(this.emp).subscribe(
      (data:any)=>{
        console.log(data);
        
      },
      (error)=>
      {
        console.log(error);
        
        this.snack.open("Added Successfully","ok",{
          duration:3000
          
        });
      }
    );
  }

  view(empl:any)
  {
    this.employeeService.setView(empl);
    const dialogRef = this.dialog.open(ViewemployeeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
   edit(empl:any)
  {
    this.employeeService.setView(empl);
    const dialogRef = this.dialog.open(EditEmployeeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
  delete(empl:any)
  {
    this.employeeService.setView(empl);
    const dialogRef = this.dialog.open(DeleteEmployeeComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
  Search()
  {
    this.ngOnInit();
    if(this.search=="Name")
    {
      this.empl=this.empl.filter(res=>{
        return res.username.toLocaleLowerCase().match(this.searchVal.toLocaleLowerCase());
      });
    }
    if(this.search=="Email")
    {
      this.empl=this.empl.filter(res=>{
        return res.email.toLocaleLowerCase().match(this.searchVal.toLocaleLowerCase());
      });
    }
  }
  reset()
  {
    this.searchVal="";
    this.ngOnInit();
  }
  setEmployees(){
    this.empl=JSON.parse(localStorage.getItem("employeeList"));
  }
}
