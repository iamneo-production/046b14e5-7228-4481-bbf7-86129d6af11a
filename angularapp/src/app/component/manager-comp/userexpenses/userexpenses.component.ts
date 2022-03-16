import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-userexpenses',
  templateUrl: './userexpenses.component.html',
  styleUrls: ['./userexpenses.component.css']
})
export class UserexpensesComponent implements OnInit {

  constructor() { }

  expenses=[
  {
    price:2000,
    desc:'V-mart',
    coupon:'coupoun for V-mart Shopping',
    status:'APPROVED'
  },
  {
    price:1200,
    desc:'S-mart',
    coupon:'coupoun for S-mart Shopping',
    status:'APPROVED'
  },
  {
    price:1100,
    desc:'L-mart',
    coupon:'coupoun for L-mart Shopping',
    status:'APPROVED'
  }
  ]
  ngOnInit(): void {
  }

}
