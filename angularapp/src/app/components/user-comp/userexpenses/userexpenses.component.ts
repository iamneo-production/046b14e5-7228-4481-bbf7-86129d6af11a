import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/services/Employee/Employee';
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
    this.setEmployee();
    this.setExpenses();
  }
  view(exp:any)
  {
    this.expenseService.setContent(exp);
    const dialogRef = this.dialog.open(ViewExpenseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 
  setExpenses()
  {
    this.expenseService.getExpense(this.emp.id).subscribe(
      (data:Expense[])=>{
        this.expenses=data;
      },
      (error)=>{
        this.snack.open("Something Went Wrong","OK");
      }
    );
  }
  setEmployee()
  {
    this.emp=JSON.parse(localStorage.getItem("employee"));
  }

}
