import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { Expense } from 'src/app/services/expense/Expense';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { ViewExpenseComponent } from '../view-expense/view-expense.component';
import { ViewFileComponent } from '../view-file/view-file.component';


@Component({
  selector: 'app-userexpenses',
  templateUrl: './userexpenses.component.html',
  styleUrls: ['./userexpenses.component.css']
})
export class UserexpensesComponent implements OnInit {

  constructor(public dialog: MatDialog, public expenseService: ExpenseService, private empService: EmployeeService, private snack: MatSnackBar) { }
  expenses: Expense[];
  receipt: any = [];
  email = "";
  emp = {
    active: null,
    email: null,
    mobileNumber: null,
    password: null,
    role: null,
    username: null,
  };
  ngOnInit(): void {
    this.email = sessionStorage.getItem("email");
    this.setEmployee();
    this.setExpenses();
  }
  view(exp: any) {
    const dialogRef = this.dialog.open(ViewFileComponent, { maxWidth: '120vh', maxHeight: '100vh', data: 'data:image/jpeg;base64,' + exp.billImage });
    dialogRef.afterClosed().subscribe(result => { });
  }
  setExpenses() {
    this.expenses = this.expenseService.getExpenses();
    this.setDate(this.expenses);
  }
  refresh() {
    this.expenseService.setExpense(this.emp.email).subscribe(
      (data: Expense[]) => {
        this.expenses = data;
        this.setDate(this.expenses);
        sessionStorage.setItem("expenses", JSON.stringify(data));
      },
      (error) => {
        console.log(error);
      }
    );
  }
  setEmployee() {
    this.emp = this.empService.getEmployee();
  }
  setDate(exp: Expense[]) {
    for (let i = 0; i < exp.length; i++) {
      exp[i].datedOn = new Date(exp[i].datedOn);;
      this.receipt[i] = 'data:image/jpeg;base64,' + exp[i].billImage;
    }
  }
}
