import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-add-expense',
  templateUrl: './add-expense.component.html',
  styleUrls: ['./add-expense.component.css']
})
export class AddExpenseComponent implements OnInit {

  t_date=new Date();
  constructor(private snack: MatSnackBar) { }

  expense = {
    price: null,
    desc: '',
    date:'',
    id:''
  }
  ngOnInit(): void {
  }
  submit() {
    if (this.t_date == null ||this.expense.price <= 0 || this.expense.price == null)
      this.snack.open('Price or Date Cannot be Empty!!', 'Ok');
      this.expense.date=this.t_date.toLocaleDateString();
      console.log(this.expense);
  }
  
}