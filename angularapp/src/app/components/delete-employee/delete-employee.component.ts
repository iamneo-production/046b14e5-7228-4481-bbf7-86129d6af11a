import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-employee',
  templateUrl: './delete-employee.component.html',
  styleUrls: ['./delete-employee.component.css']
})
export class DeleteEmployeeComponent implements OnInit {

  emp={
    id:null,
    active:null,
    email:null,
    mobileNumber:null,
    password:null,
    role:null,
    username:null,
  };

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
  delete()
  {
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
       this.close();
      }
    });
  }

}
