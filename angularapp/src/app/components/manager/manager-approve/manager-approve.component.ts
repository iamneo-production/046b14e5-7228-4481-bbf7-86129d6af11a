import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/services/Employee/Employee';
import { Expense } from 'src/app/services/expense/Expense';
import { ManagerService } from 'src/app/services/manager/manager.service';
import { ViewExpenseComponent } from '../../employee/view-expense/view-expense.component';

@Component({
  selector: 'app-manager-approve',
  templateUrl: './manager-approve.component.html',
  styleUrls: ['./manager-approve.component.css']
})
export class ManagerApproveComponent implements OnInit 
{
  emp:Employee;
  expenses:Expense[]=[];
  approved:Expense[]=[];
  pending:Expense[]=[];
  declined:Expense[]=[];
  constructor(public dialog:MatDialog,public managerService:ManagerService,private snack:MatSnackBar) { }
  
  ngOnInit(): void {
    this.emp=JSON.parse(sessionStorage.getItem("emp"));
    this.setExpenses();
  }
  public setExpenses(){
  this.expenses=this.managerService.getAllExpenses();
  this.seperate();
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
  refresh()
  {
    this.managerService.setAllExpenses().subscribe(
      (data:Expense[])=>{
        this.expenses=data;
        sessionStorage.setItem("managerExp",JSON.stringify(data));
      },
      (error)=>{
        console.log(error);
      }
    );
  }
  seperate()
  {
    for(let exp of this.expenses)
    {
      if(exp.status=="approved")
      this.approved.push(exp);
      if(exp.status=="pending")
      this.pending.push(exp);
      if(exp.status=="declined")
      this.declined.push(exp);
    }
  }
}