import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExpenseService {

  constructor() { }
  expense={
    price: null,
    id:'',
    desc: '',
    coupon: '',
    status: ''
  }
  setContent(exp:any)
  {
    this.expense=exp;
  }
  getContent()
  {
    return this.expense;
  }
}
