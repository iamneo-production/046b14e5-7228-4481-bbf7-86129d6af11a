import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
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
  message: "";
  receipt: any = File;
  email = "";
  limit: number;
  t_date = new Date();
  public emp: Employee;
  expense = {
    expenseId:null,
    billCost: null,
    datedOn: null,
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
      this.expense.expenseId="exp_"+this.t_date.toLocaleTimeString();
      console.log(this.expense.expenseId);
      
      this.expense.claimedBy = this.emp;
      this.expense.datedOn = this.t_date;
      const formData = new FormData();
      formData.append('expense', JSON.stringify(this.expense));
      formData.append('file', this.receipt);
      console.log(formData.get('file'));

      this.expenseService.saveExpense(formData).subscribe(
        (data: any) => {
          console.log(data);
          this.snack.open("Expense Added Sucessfully", "OK",{duration:2000});
          this.expenseService.setLimit(this.emp.id);
          this.expenseService.setCurrentExpenses(this.emp.id);
          this.expenseService.setExpense(this.emp.id);
        },
        (error) => {
          console.log(error);
          this.snack.open("Something Went Wrong", "OK",{duration:2000});

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

  selectFile(event) {
    const file = event.target.files[0];
    this.receipt = file;
    console.log(this.receipt);
  }
}
