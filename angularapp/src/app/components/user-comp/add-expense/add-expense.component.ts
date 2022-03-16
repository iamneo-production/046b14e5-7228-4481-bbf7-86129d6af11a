import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  constructor(private snack: MatSnackBar) { }

  expense = {
    price: null,
    desc: '',
    date:null,
    id:''
  }
  ngOnInit(): void {
  }
  submit() {
    if (this.expense.date == '' || this.expense.date == null ||this.expense.price <= 0 || this.expense.price == null)
      this.snack.open('Price or Date Cannot be Empty!!', 'Ok');
  }
}
