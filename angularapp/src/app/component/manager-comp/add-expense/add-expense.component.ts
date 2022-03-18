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
    date:'',
    id:''
  }
  ngOnInit(): void {
  }
  submit() {
  }
}