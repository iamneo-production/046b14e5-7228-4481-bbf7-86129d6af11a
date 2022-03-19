import { Employee } from "../Employee/Employee";

export interface Expense{
    expenseId:string,
    billNumber:number,
    empId:number,
    billCost:number,
    datedOn:Date,
    remark:string,
    status:string,
    billImage:Blob,
    claimedBy:Employee
}

  // expenses = [
  //   {
  //     price: 100,
  //     id:'E-001',
  //     desc: 'V-mart',
  //     status: 'APPROVED'
  //   },
  //   {
  //     price: 200,
  //     id:'E-002',
  //     desc: 'S-mart',
  //     status: 'PENDING'
  //   },
  //   {
  //     price: 1100,
  //     id:'E-003',
  //     desc: 'L-mart',
  //     status: 'APPROVED'
  //   },
  //   {
  //     price: 200,
  //     id:'E-004',
  //     desc: 'S-mart',
  //     status: 'DECLINED'
  //   },
  //   {
  //     price: 200,
  //     id:'E-005',
  //     desc: 'S-mart',
  //     status: 'APPROVED'
  //   },
  //   {
  //     price: 200,
  //     id:'E-006',
  //     desc: 'S-mart',
  //     status: 'PENDING'
  //   },
  //   {
  //     price: 200,
  //     id:'E-007',
  //     desc: 'S-mart',
  //     status: 'APPROVED'
  //   },
  //   {
  //     price: 200,
  //     id:'E-008',
  //     desc: 'S-mart',
  //     status: 'PENDING'
  //   },
  //   {
  //     price: 200,
  //     id:'E-009',
  //     desc: 'S-mart',
  //     status: 'PENDING'
  //   }
  // ]