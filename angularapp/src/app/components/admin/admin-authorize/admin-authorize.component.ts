import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin/admin.service';
import { Employee } from 'src/app/services/Employee/Employee';
import { DeleteEmployeeComponent } from '../delete-employee/delete-employee.component';
import { ViewemployeeComponent } from '../viewemployee/viewemployee.component';

@Component({
  selector: 'app-admin-authorize',
  templateUrl: './admin-authorize.component.html',
  styleUrls: ['./admin-authorize.component.css']
})
export class AdminAuthorizeComponent implements OnInit {

  empList: Employee[] = [];
  notAuth:Employee[]=[];
  constructor(private adminService: AdminService,private snack: MatSnackBar,public dialog: MatDialog) { }

  ngOnInit(): void {
    this.setEmployees();
  }
  setEmployees() {
    this.notAuth=[];
    this.empList = this.adminService.getEmployees();
    for(let i=0;i<this.empList.length;i++)
    {
      if(!this.empList[i].active)
      {
        this.notAuth.push(this.empList[i]);
      }
    }
  }
  
  auth(emp: Employee, status: string) {
    let action:string;
    if (status == "true") {
      emp.active = true;
      action="Authorized";
    }
    else {
      this.delete(emp);
      return;
    }
    this.adminService.updateEmployees(emp).subscribe(
      (data) => {
        this.snack.open("Employee " +action, "OK", {
          duration: 3000
        });
        this.adminService.setAllEmployees().subscribe(data=>{this.empList=data;});
      },
      (error) => {
        console.log(error);
      }
    );
  }
  delete(empl: any) {
    const dialogRef = this.dialog.open(DeleteEmployeeComponent, { data: empl });
    dialogRef.afterClosed().subscribe(result => {
      this.setEmployees();
    });
  }
  view(empl: any) {
    const dialogRef = this.dialog.open(ViewemployeeComponent, { data: empl });
    dialogRef.afterClosed().subscribe(result => {
      this.setEmployees();
    });
  }
}
