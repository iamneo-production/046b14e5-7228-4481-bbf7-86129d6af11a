import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from '../url';
import { Expense } from './Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(public http:HttpClient) { }
  expense:Expense;
  
  public getAllExpenses():Observable<Expense[]>
  {
    return this.http.get<Expense[]>(`${baseUrl}/expense`);
  }
  public saveExpense(expense:any):Observable<String>
  {
    return this.http.post<String>(`${baseUrl}/expense`,expense);
  }
  public updateExpense(expense:Expense) :Observable<String>
  {
    return this.http.put<String>(`${baseUrl}/expense/${expense.expenseId}`,expense);
  }
  public getExpense(id:number)
  {
    return this.http.get<Expense[]>(`${baseUrl}/expense/${id}`);
  }
  public deleteExpense(expenseId:string):Observable<String>
  {
    return this.http.delete<String>(`${baseUrl}/manager/${expenseId}`);
  }
  // public getExpensesById(id:number)
  // {
  //   this.http.get<Expense[]>(`${baseUrl}/expenses/`)
  // }
  setContent(exp:any)
  {
    this.expense=exp;
  }
  getContent()
  {
    return this.expense;
  }
  
}
