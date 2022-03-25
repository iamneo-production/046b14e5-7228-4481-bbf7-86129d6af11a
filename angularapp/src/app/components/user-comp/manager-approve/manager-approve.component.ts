import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { ViewExpenseComponent } from '../view-expense/view-expense.component';

@Component({
  selector: 'app-manager-approve',
  templateUrl: './manager-approve.component.html',
  styleUrls: ['./manager-approve.component.css']
})
export class ManagerApproveComponent implements OnInit 
{

  constructor(public dialog:MatDialog,public expenseService:ExpenseService) { }

  ngOnInit(): void {
  }
  date = new Date(2018, 11, 24, 10, 33, 30, 0);
  expenses = [
    {
      expenseId: "001",
      billNumber: 90,
      empId: 1,
      billCost: 2020,
      datedOn: this.date,
      remark: "Travel Expense",
      status: "approved",
      billImage: null,
      claimedBy: null
    },
    {
      expenseId: "001",
      billNumber: 90,
      empId: 1,
      billCost: 2020,
      datedOn: this.date,
      remark: "Travel Expense",
      status: "approved",
      billImage: null,
      claimedBy: null
    },
    {
      expenseId: "001",
      billNumber: 90,
      empId: 1,
      billCost: 2020,
      datedOn: this.date,
      remark: "Travel Expense",
      status: "approved",
      billImage: null,
      claimedBy: null
    },
    {
      expenseId: "001",
      billNumber: 90,
      empId: 1,
      billCost: 2020,
      datedOn: this.date,
      remark: "Travel Expense",
      status: "approved",
      billImage: null,
      claimedBy: null
    },
    {
      expenseId: "001",
      billNumber: 90,
      empId: 1,
      billCost: 2020,
      datedOn: this.date,
      remark: "Travel Expense",
      status: "approved",
      billImage: null,
      claimedBy: null
    },
    {
      expenseId: "001",
      billNumber: 90,
      empId: 1,
      billCost: 2020,
      datedOn: this.date,
      remark: "Travel Expense",
      status: "approved",
      billImage: null,
      claimedBy: null
    },
    {
      expenseId: "001",
      billNumber: 90,
      empId: 1,
      billCost: 2020,
      datedOn: this.date,
      remark: "Travel Expense",
      status: "approved",
      billImage: null,
      claimedBy: null
    },
    {
      expenseId: "001",
      billNumber: 90,
      empId: 1,
      billCost: 2020,
      datedOn: this.date,
      remark: "Travel Expense",
      status: "approved",
      billImage: null,
      claimedBy: null
    },
    {
      expenseId: "001",
      billNumber: 90,
      empId: 1,
      billCost: 2020,
      datedOn: this.date,
      remark: "Travel Expense",
      status: "approved",
      billImage: null,
      claimedBy: null
    },
    
  ];
  view(exp:any)
  {
    this.expenseService.setContent(exp);
    const dialogRef = this.dialog.open(ViewExpenseComponent);
    dialogRef.afterClosed().subscribe(result => 
      {
      console.log(`Dialog result: ${result}`);
    }
    );
  }
}