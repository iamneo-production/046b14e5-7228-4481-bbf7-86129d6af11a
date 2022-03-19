import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  constructor() {

  }
  employee = [
    {
      name: 'Ms.J.seetha',
      mail: 'seetha123@gmail.com',
      password: 'seth123',
      experience: '3years',
      specialist: 'java'
    },
    {
      name: 'Mr.K.Lakshmandas',
      mail: 'lakshman456@gmail.com',
      password: 'laks_123',
      experience: '2years',
      specialist: 'python , HTML,CSS'
    },
    {
      name: 'Ms.E.Farad',
      mail: 'faradAliKhan23@gmail.com',
      password: 'fard123',
      experience: '1year',
      specialist: 'Angular 8, SpringBoot'
    },
    {
      name: 'Mr.D.Seshank',
      mail: 'seshank2911@gmail.com',
      password: 'shank123',
      experience: '3years',
      specialist: 'NodeJS , MongoDb, Angular'
    },
    {
      name: 'Mr.V.Payal Bohra',
      mail: 'Payal123@gmail.com',
      password: 'Bohrapayal098',
      experience: '2years',
      specialist: 'React,MongoDb'
    },
    {
      name: 'Ms.A.Shivani',
      mail: 'shiv567@gmail.com',
      password: 'vani789',
      experience: '1year',
      specialist: 'Mysql'
    },
    {
      name: 'Mr.B.Amrith',
      mail: 'Amrith007@gmail.com',
      password: 'amrith007',
      experience: '3years',
      specialist: 'java,python'
    },
    {
      name: 'Ms.S.Shwetha',
      mail: 'shwetha123@gmail.com',
      password: 'shwe098',
      experience: '5years',
      specialist: 'C,C++'
    },
    {
      name: 'Mr.J.Jashwanth',
      mail: 'Jashwanth23@gmail.com',
      password: 'jash34',
      experience: 'nil',
      specialist: 'python'
    },
    {
      name: 'Ms.R.Radha',
      mail: 'radha123@gmail.com',
      password: 'rad123',
      experience: '4years',
      specialist: 'Angular8'
    }
  ];

  list = {
    name: 'seetha',
    mail: '22/08/2001',
    password: '123',
    experience: '2years',
    specialist: 'java'
  };
  adm = {
    name: '',
    mail: '',
    password: '',
    experience: '',
    specialist: ''
  };
  update() {
    this.employee.push(this.adm);
  }


  ngOnInit(): void {

  }

}
