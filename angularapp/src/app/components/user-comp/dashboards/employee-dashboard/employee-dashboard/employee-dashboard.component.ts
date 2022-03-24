import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Employee } from 'src/app/services/Employee/Employee';
import { Expense } from 'src/app/services/expense/Expense';
import { ExpenseService } from 'src/app/services/expense/expense.service';
@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.css']
})
export class EmployeeDashboardComponent implements OnInit {
  role="";
  expense:Expense[]=[];
  emp={
    id:null,
    active:null,
    email:null,
    mobileNumber:null,
    password:null,
    role:null,
    username:null,
  };
  approved:number;
  pending:number;
  total:number;
  totalemp:number;
  employees:Employee[]=[];
  constructor(private snack: MatSnackBar,private expenseService:ExpenseService) { }
  
  ngOnInit(): void {
    this.role=localStorage.getItem("role");
    this.approved=0;
    this.pending=0;
    this.total=0;
    this.totalemp=0;
    this.employees= JSON.parse(localStorage.getItem("employeeList"));
    this.setEmployee();
    this.setExpenses();
    this.setDetails();
    
  }
  setExpenses(){
  this.expenseService.getCurrentExpenses(this.emp.id).subscribe(
    (data)=>{
      this.expense=data;
      console.log(this.expense[0]);
    },
    (error)=>{
      console.log(error);
    }
  );
  }
  setEmployee()
  {
    this.emp=JSON.parse(localStorage.getItem("employee"));
  }
  setDetails(){
    for(let i=0; i<this.expense.length; i++){
      if(this.expense[i].status=="approved"){
        this.approved+=this.expense[i].billCost;
      }
      if(this.expense[i].status=="pending"){
        this.pending+=this.expense[i].billCost;
      }
      this.total+=this.expense[i].billCost;
  }
  for(let i=0; i<this.employees.length; i++){
    if(this.employees[i].role=="employee")
     this.totalemp++;

  }
  console.log(this.approved);
  console.log(this.pending);
  console.log(this.total);
  console.log(this.totalemp);

  }

}
