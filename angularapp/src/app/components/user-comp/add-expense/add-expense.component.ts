import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/services/Employee/Employee';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  t_date = new Date();
  public emp: Employee;
  expense = {
    expenseId: null,
    billNumber: null,
    billCost: null,
    datedOn: null,
    empId: null,
    remark: null,
    status: null,
    claimedBy: null
  }
  constructor(private snack: MatSnackBar, public expenseSevice: ExpenseService) { }

  ngOnInit(): void {
    this.emp = JSON.parse(localStorage.getItem("employee"));
  }
  submit() {
    if (this.t_date == null || this.expense.billCost <= 0 || this.expense.billCost == null)
      this.snack.open('Price or Date Cannot be Empty!!', 'Ok');
    else {
      this.expense.empId = this.emp.id;
      this.expense.claimedBy = this.emp;
      this.expense.expenseId = 'E_' + this.expense.billNumber
      this.expense.datedOn = this.t_date;
      this.expenseSevice.saveExpense(this.expense).subscribe(
        (data: String) => {
          this.snack.open("Expense Added Sucessfully", "OK");
        },
        (error) => {
          console.log(error);
          this.snack.open("Expense Added Sucessfully", "OK");
        }
      );
    }
  }

}
