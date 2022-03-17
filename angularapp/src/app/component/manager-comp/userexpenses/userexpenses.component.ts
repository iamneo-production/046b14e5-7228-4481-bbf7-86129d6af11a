import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { ViewExpenseComponent } from '../view-expense/view-expense.component';

@Component({
  selector: 'app-userexpenses',
  templateUrl: './userexpenses.component.html',
  styleUrls: ['./userexpenses.component.css']
})
export class UserexpensesComponent implements OnInit {

  constructor(public dialog:MatDialog,public expenseService:ExpenseService) { }

  expenses = [
    {
      price: 100,
      id:'E-001',
      desc: 'V-mart',
      status: 'APPROVED'
    },
    {
      price: 200,
      id:'E-002',
      desc: 'S-mart',
      status: 'PENDING'
    },
    {
      price: 1100,
      id:'E-003',
      desc: 'L-mart',
      status: 'APPROVED'
    },
    {
      price: 200,
      id:'E-004',
      desc: 'S-mart',
      status: 'DECLINED'
    },
    {
      price: 200,
      id:'E-005',
      desc: 'S-mart',
      status: 'APPROVED'
    },
    {
      price: 200,
      id:'E-006',
      desc: 'S-mart',
      status: 'PENDING'
    },
    {
      price: 200,
      id:'E-007',
      desc: 'S-mart',
      status: 'APPROVED'
    },
    {
      price: 200,
      id:'E-008',
      desc: 'S-mart',
      status: 'PENDING'
    },
    {
      price: 200,
      id:'E-009',
      desc: 'S-mart',
      status: 'PENDING'
    }
  ]
  ngOnInit(): void {
  }
  remove(key:string) {
    console.log('remove');
    this.expenses.forEach((value,index)=>{
        if(value.id==key) this.expenses.splice(index,1);
    });
}
  view(exp:any)
  {
    this.expenseService.setContent(exp);
    const dialogRef = this.dialog.open(ViewExpenseComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  } 

}