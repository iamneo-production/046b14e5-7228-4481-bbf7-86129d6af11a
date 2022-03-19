import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Expense } from 'src/app/services/expense/Expense';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {

  date="";
  constructor(public dialog:MatDialog,public expenseService:ExpenseService) { }
expense:Expense;
  ngOnInit(): void {
    this.expense=this.expenseService.getContent();
    this.date=this.expense.datedOn.toDateString();
  }
  close()
  {
    this.dialog.closeAll();
  }
}
