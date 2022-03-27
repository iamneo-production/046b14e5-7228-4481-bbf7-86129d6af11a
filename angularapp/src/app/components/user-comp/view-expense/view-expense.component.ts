import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { ViewFileComponent } from '../view-file/view-file.component';

@Component({
  selector: 'app-view-expense',
  templateUrl: './view-expense.component.html',
  styleUrls: ['./view-expense.component.css']
})
export class ViewExpenseComponent implements OnInit {

  constructor(private dialog:MatDialog,@Inject(MAT_DIALOG_DATA) public expense: any,public this_dialog: MatDialogRef<ViewExpenseComponent>, public expenseService: ExpenseService) { }

  ngOnInit(): void {
  }
  view()
  {
    const dialogRef = this.dialog.open(ViewFileComponent,{data:'data:image/jpeg;base64,'+this.expense.billImage});
    dialogRef.afterClosed().subscribe(result => {});
  } 
  close() {
    this.this_dialog.close();
  }
}
