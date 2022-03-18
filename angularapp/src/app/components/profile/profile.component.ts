import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/services/Employee/employee.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  user:any;
  constructor(public empService:EmployeeService ) { 
    this.user=this.empService.getEmployee();
    this.disp();
  }

  ngOnInit(): void {
  }
  
  disp()
  {
    console.log(this.user);
    
  }
}
