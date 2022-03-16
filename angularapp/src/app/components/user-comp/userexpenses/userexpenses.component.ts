import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userexpenses',
  templateUrl: './userexpenses.component.html',
  styleUrls: ['./userexpenses.component.css']
})
export class UserexpensesComponent implements OnInit {

  constructor() { }

  expenses = [
    {
      price: 100,
      id:'E-001',
      desc: 'V-mart',
      coupon: 'coupoun for V-mart Shopping',
      status: 'APPROVED'
    },
    {
      price: 200,
      id:'E-002',
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'PENDING'
    },
    {
      price: 1100,
      id:'E-003',
      desc: 'L-mart',
      coupon: 'coupoun for L-mart Shopping',
      status: 'APPROVED'
    },
    {
      price: 200,
      id:'E-004',
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'DECLINED'
    },
    {
      price: 200,
      id:'E-005',
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'APPROVED'
    },
    {
      price: 200,
      id:'E-006',
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'PENDING'
    },
    {
      price: 200,
      id:'E-007',
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'APPROVED'
    },
    {
      price: 200,
      id:'E-008',
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'PENDING'
    },
    {
      price: 200,
      id:'E-009',
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
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

}
