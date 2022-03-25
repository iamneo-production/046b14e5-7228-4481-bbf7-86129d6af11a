import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Employee } from 'src/app/services/Employee/Employee';

@Component({
  selector: 'app-viewemployee',
  templateUrl: './viewemployee.component.html',
  styleUrls: ['./viewemployee.component.css']
})
export class ViewemployeeComponent implements OnInit {
  emp={
    id:null,
    active:null,
    email:null,
    mobileNumber:null,
    password:null,
    role:null,
    username:null,
  };
  constructor(public dialog:MatDialog) { }

  ngOnInit(): void {
    this.setEmployee();
  }
  setEmployee(){
    this.emp=JSON.parse(localStorage.getItem("emp"));
  }
  close()
  {
    this.dialog.closeAll();
  }
}
