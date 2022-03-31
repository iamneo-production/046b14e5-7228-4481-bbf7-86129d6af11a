import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from 'src/app/services/admin/admin.service';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import Swal from 'sweetalert2';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {
  constructor(public dialog: MatDialog, private snack: MatSnackBar, private adminService: AdminService, private empService: EmployeeService, @Inject(MAT_DIALOG_DATA) public emp: any) { }

  ngOnInit(): void {
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
        this.adminService.deleteEmployees(this.emp.email)
          .subscribe(
            (data) => {
              this.snack.open("Deleted Successfully", "OK", {
                duration: 3000
              });
              this.adminService.setAllEmployees();
            },
            (error) => {
          console.log(error);
          (error)
            });
        this.close();
      }
    });
  }

}
