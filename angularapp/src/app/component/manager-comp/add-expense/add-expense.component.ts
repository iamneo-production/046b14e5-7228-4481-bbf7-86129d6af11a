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
    coupon: ''
  }
  ngOnInit(): void {
  }
  submit() {
    if ((this.expense.coupon == '' || this.expense.coupon == null )&&(this.expense.price <= 0 || this.expense.price == null))
      this.snack.open('Price or Coupon Code Cannot be Empty!!', 'Ok');
    else if (this.expense.coupon == '' || this.expense.coupon == null)
      this.snack.open('Coupon Code Cannot be Empty!!', 'Ok');
    else if (this.expense.price == -1 || this.expense.price == null)
      this.snack.open('Price Cannot be Empty!!', 'Ok');
  }
}