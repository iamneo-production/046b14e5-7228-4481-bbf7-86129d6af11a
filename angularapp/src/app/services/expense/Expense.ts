import { Employee } from "../Employee/Employee";

export interface Expense{
    expenseId:string,
    billNumber:number,
    empId:number,
    billCost:number,
    datedOn:Date,
    remark:string,
    status:string,
    billImage:any,
    claimedBy:Employee,
    description :string
}