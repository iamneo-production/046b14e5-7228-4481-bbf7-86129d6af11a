import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExpenseService } from 'src/app/services/expense/expense.service';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public expense: any,public dialog: MatDialog, public expenseService: ExpenseService) { }

  ngOnInit(): void {
  }
  close() {
    this.dialog.closeAll();
  }
}
