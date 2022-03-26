import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { Expense } from 'src/app/services/expense/Expense';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { ViewExpenseComponent } from '../view-expense/view-expense.component';


@Component({
  selector: 'app-userexpenses',
  templateUrl: './userexpenses.component.html',
  styleUrls: ['./userexpenses.component.css']
})
export class UserexpensesComponent implements OnInit {

  constructor(public dialog:MatDialog,public expenseService:ExpenseService,private empService:EmployeeService,private snack:MatSnackBar) { }
  expenses:Expense[];
  email="";
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
    this.email = localStorage.getItem("email");
    this.setEmployee();
    this.setExpenses();
  }
  view(exp:any)
  {
    const dialogRef = this.dialog.open(ViewExpenseComponent,{data:exp});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
  setExpenses()
  {
    this.expenses=this.expenseService.getExpenses();
  }
  setEmployee()
  {
    this.emp=this.empService.getEmployee();
  }

}
