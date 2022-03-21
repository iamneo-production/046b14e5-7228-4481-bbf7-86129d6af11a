import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-edit-employee',
  templateUrl: './edit-employee.component.html',
  styleUrls: ['./edit-employee.component.css']
})
export class EditEmployeeComponent implements OnInit {
  emp={
    id:null,
    active:null,
    email:null,
    mobileNumber:null,
    password:null,
    role:null,
    username:null,
  };
  pass='';
  pass_match=true;
  constructor(public dialog:MatDialog,private snack:MatSnackBar) { }

  ngOnInit(): void {
    this.setEmployee();
  }
  setEmployee(){
    this.emp=JSON.parse(localStorage.getItem("emp"));
    console.log(this.emp);
    
  }
  close()
  {
    this.dialog.closeAll();
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
  this.snack.open("Updated Successfully !! ", "ok");
 }
}
