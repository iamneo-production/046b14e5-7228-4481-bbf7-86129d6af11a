import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
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
  pass = '';
  pass_match = true;
  search = "Name";
  searchVal = "";
  emp = {
    id: null,
    active: true,
    email: null,
    mobileNumber: null,
    password: null,
    role: 'employee',
    username: null,
  };
  empList: Employee[] = [];
  empl: Employee[] = [];
  constructor(private adminService: AdminService, public router: Router, private snack: MatSnackBar, private employeeService: EmployeeService, public dialog: MatDialog) { }
  ngOnInit(): void {
    this.setEmployees();
  }
  formSubmit() {
    if (this.emp.username == '' || this.emp.username == null || this.emp.email == '' || this.emp.email == null) {
      this.snack.open("Mandatory fields cannot be empty", "ok", {
        duration: 3000,
      });
      return;
    }
    if (this.emp.password != this.pass) {
      this.pass_match = false;
      this.snack.open("Passwords Don't Match", "OK");
    }
    else {
      this.adminService.addEmployees(this.emp).subscribe(
        (data: any) => {
          console.log(data);
        },
        (error:HttpErrorResponse) => {
          console.log(error.message);

          this.snack.open("Added Successfully", "ok", {duration: 3000});
          this.adminService.setAllEmployees();
        }
      );
     
    }
  }

  view(empl: any) {
    const dialogRef = this.dialog.open(ViewemployeeComponent,{data:empl});
    dialogRef.afterClosed().subscribe(result => {
      this.setEmployees();
    });
  }
  edit(empl: any) {
    const dialogRef = this.dialog.open(EditEmployeeComponent,{data:empl});
    dialogRef.afterClosed().subscribe(result => {
      this.setEmployees();
    });
  }
  delete(empl: any) {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent,{data:empl});
    dialogRef.afterClosed().subscribe(result => {
      this.setEmployees();
    });
  }
  Search() {
    this.empl = this.empList;
    if (this.search == "Name") {
      this.empl = this.empl.filter(res => {
        return res.username.toLocaleLowerCase().match(this.searchVal.toLocaleLowerCase());
      });
    }
    if (this.search == "Email") {
      this.empl = this.empl.filter(res => {
        return res.email.toLocaleLowerCase().match(this.searchVal.toLocaleLowerCase());
      });
    }
  }
  reset() {
    this.searchVal = "";
    this.empl=this.empList;
  }
  setEmployees() {
    this.empList=this.adminService.getEmployees();
    this.empl=this.adminService.getEmployees();
  }
}
