import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import baseUrl from '../url';
import { Expense } from './Expense';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor(public http: HttpClient) { }
  expenses: Expense[];
  curr_exp: Expense[];

  public setAllExpenses(): Observable<Expense[]> {
    return this.http.get<Expense[]>(`${baseUrl}/expense`);
  }
  public saveExpense(expense: any): Observable<String> {
    return this.http.post<String>(`${baseUrl}/expense`, expense);
  }
  public updateExpense(expense: Expense): Observable<String> {
    return this.http.put<String>(`${baseUrl}/expense/${expense.expenseId}`, expense);
  }
  public setExpense(id: number) {
    this.http.get<Expense[]>(`${baseUrl}/expense/${id}`).subscribe(
      (data: Expense[]) => {
        this.expenses = data;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  public getExpenses() {
    return this.expenses;
  }
  public deleteExpense(expenseId: string): Observable<String> {
    return this.http.delete<String>(`${baseUrl}/manager/${expenseId}`);
  }
  public setLimit(id: number): Observable<number> {
    return this.http.get<number>(`${baseUrl}/expense/sum-month/${id}`);
  }
  public setCurrentExpenses(id: number) {
    this.http.get<Expense[]>(`${baseUrl}/expense/curr-month/${id}`)
      .subscribe(
        (data:Expense[]) => {
          this.curr_exp=data;
        },
        (error) => {
          console.log(error);
        }
      );
  }
  public getCurrentExpenses()
  {
    return this.curr_exp;
  }
  public getEmpExpense(id: number) { }
}
