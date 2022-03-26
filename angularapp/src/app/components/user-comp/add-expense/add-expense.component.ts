import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/services/Employee/Employee';
import { EmployeeService } from 'src/app/services/Employee/employee.service';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  email = "";
  limit: number;
  t_date = new Date();
  public emp: Employee;
  expense = {
    expenseId: null,
    billNumber: null,
    billCost: null,
    datedOn: null,
    empId: null,
    remark: null,
    claimedBy: null
  }
  constructor(private snack: MatSnackBar, public expenseService: ExpenseService, private empService: EmployeeService) { }

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    this.setEmployees();
    this.setLimit();
  }
  submit() {
    if (this.t_date == null || this.expense.billCost <= 0 || this.expense.billCost == null)
      this.snack.open('Price or Date Cannot be Empty!!', 'Ok');
    else if (((this.expense.billCost) + (this.limit)) > 5000) {
      Swal.fire({
        title: "This month's quota Exceeded limit",
        text: `Quota Left : ${5000 - this.limit}`,
        icon: 'warning',
        confirmButtonColor: '#F80707',
        confirmButtonText: 'OK'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.close();
        }
      });
    }
    else {
      this.expense.empId = this.emp.id;
      this.expense.claimedBy = this.emp;
      this.expense.expenseId = 'E_' + this.expense.billNumber
      this.expense.datedOn = this.t_date;
      this.expenseService.saveExpense(this.expense).subscribe(
        (data: String) => {
          this.snack.open("Expense Added Sucessfully", "OK");
        },
        (error) => {
          console.log(error);
          this.snack.open("Expense Added Sucessfully", "OK");
          this.expenseService.setLimit(this.emp.id);
          this.expenseService.setCurrentExpenses(this.emp.id);
          this.expenseService.setExpense(this.emp.id);
          this.ngOnInit();
        }
      );
    }
  }
  setEmployees() {
    this.emp = this.empService.getEmployee();
  }
  setLimit() {
    this.expenseService.setLimit(this.emp.id).subscribe(
      (data: number) => {
        this.limit = data;
      },
      (error) => {
        console.log(error);
      }
    );
    if (this.limit == null) {
      this.limit = 0;
    }
  }

}
