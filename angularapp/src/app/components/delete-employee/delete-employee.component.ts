import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin/admin.service';
import Swal from 'sweetalert2';
import { AdminComponent } from '../user-comp/admin/admin.component';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  emp = {
    id: null,
    active: null,
    email: null,
    mobileNumber: null,
    password: null,
    role: null,
    username: null,
  };

  constructor(public dialog: MatDialog, private snack: MatSnackBar, private adminService: AdminService, private adminComp: AdminComponent) { }

  ngOnInit(): void {
    this.setEmployee();
  }
  setEmployee() {
    this.emp = JSON.parse(localStorage.getItem("emp"));
    console.log(this.emp);

  }
  close() {
    this.dialog.closeAll();
  }
  delete() {
    Swal.fire({
      title: 'Are you sure you want to delete?',
      text: "Changes cannot be modified !",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete'
    }).then((result) => {
      if (result.isConfirmed) {
        this.adminService.deleteEmployees(this.emp.id)
          .subscribe(
            (data) => {
              console.log(data);

            },
            (error) => {
              this.snack.open("Deleted Successfully", "OK", {
                duration: 3000
              });
              this.adminService.getAllEmployees();
              this.adminComp.setEmployees();
            });
        this.close();
      }
    });
  }

}
