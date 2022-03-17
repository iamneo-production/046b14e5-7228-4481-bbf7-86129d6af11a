import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {

  constructor(public dialog:MatDialog,public expenseService:ExpenseService) { }

  expense={
    price: null,
    id:'',
    desc: '',
    coupon: '',
    status: ''
  }
  ngOnInit(): void {
    this.expense=this.expenseService.getContent();
  }
  close()
  {
    this.dialog.closeAll();
  }
}
