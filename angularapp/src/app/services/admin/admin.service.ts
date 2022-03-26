import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { Employee } from '../Employee/Employee';
import baseUrl from '../url';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  employees: Employee[];
  emp: Employee;
  constructor(private http: HttpClient, private snack: MatSnackBar) { }
  public setAllEmployees() {
    this.http.get<Employee[]>(`${baseUrl}/admin`).subscribe(
      (data: Employee[]) => {
        this.employees = data;
      },
      (error) => {
        this.snack.open("Something Went wrong", "OK", { duration: 3000 });
      }
    );
  }
  public setEmployee(id: number) {
    this.http.get<Employee>(`${baseUrl}/admin/${id}`).subscribe(
      (data: any) => {
        this.emp = data;
      },
      (error) => {
        this.snack.open("Something Went wrong", "OK", { duration: 3000 });
      }
    );
  }
  public getEmployee() {
    return this.emp;
  }
  public getEmployees() {
    return this.employees;
  }
  public addEmployees(emp: Employee): Observable<string> {
    return this.http.post<string>(`${baseUrl}/admin`, emp);
  }
  public updateEmployees(emp: Employee): Observable<string> {
    return this.http.put<string>(`${baseUrl}/admin/${emp.id}`, emp);
  }
  public deleteEmployees(id: number): Observable<string> {
    return this.http.delete<string>(`${baseUrl}/admin/${id}`);
  }
}

