import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Admin List';
  adminList: string[] = [
    'Mr.Ram Kumar',
    'Mr.Ram ',
    'Mr.Ram Kumar',
    'Mr.Ram Kumar',
    'Mr.Ram Kumar',
  ]
}