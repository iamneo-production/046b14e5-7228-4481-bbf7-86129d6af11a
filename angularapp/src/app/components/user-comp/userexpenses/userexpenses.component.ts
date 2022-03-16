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
      desc: 'V-mart',
      coupon: 'coupoun for V-mart Shopping',
      status: 'APPROVED'
    },
    {
      price: 200,
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'PENDING'
    },
    {
      price: 1100,
      desc: 'L-mart',
      coupon: 'coupoun for L-mart Shopping',
      status: 'APPROVED'
    },
    {
      price: 200,
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'DECLINED'
    },
    {
      price: 200,
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'APPROVED'
    },
    {
      price: 200,
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'PENDING'
    },
    {
      price: 200,
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'APPROVED'
    },
    {
      price: 200,
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'PENDING'
    },
    {
      price: 200,
      desc: 'S-mart',
      coupon: 'coupoun for S-mart Shopping',
      status: 'PENDING'
    }
  ]
  ngOnInit(): void {
  }

}
