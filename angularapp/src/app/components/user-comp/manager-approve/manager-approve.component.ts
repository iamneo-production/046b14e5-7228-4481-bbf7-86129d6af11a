import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Expense } from 'src/app/services/expense/Expense';
import { ExpenseService } from 'src/app/services/expense/expense.service';
import { ManagerService } from 'src/app/services/manager/manager.service';
import { ViewExpenseComponent } from '../view-expense/view-expense.component';

@Component({
  selector: 'app-manager-approve',
  templateUrl: './manager-approve.component.html',
  styleUrls: ['./manager-approve.component.css']
})
export class ManagerApproveComponent implements OnInit 
{
  expenses:Expense[]=[];
  constructor(public dialog:MatDialog,public managerService:ManagerService,private snack:MatSnackBar) { }
  
  ngOnInit(): void {
    this.setExpenses();
  }
  public setExpenses(){
  this.expenses=this.managerService.getAllExpenses();
  }
  public approveExpense(exp:Expense,status:string){
  exp.status=status;
  this.managerService.updateExpense(exp).subscribe(
    (data:any)=>{this.snack.open("Expense "+status,"ok",{duration:3000});
  },
    (error)=>{console.log(error);
    }
  );
  }
  public deleteExpense(exp:Expense){
    this.managerService.deleteExpense(exp).subscribe(
      (data:any)=>{this.snack.open(data,"ok",{duration:3000});},
      (error)=>{console.log(error);
      }
    );
    }
  view(exp:any)
  {
    const dialogRef = this.dialog.open(ViewExpenseComponent,{data:exp});
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    }
    );
  }
}