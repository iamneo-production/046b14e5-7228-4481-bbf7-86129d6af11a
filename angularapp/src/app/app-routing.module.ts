import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddExpenseComponent } from './component/manager-comp/add-expense/add-expense.component';
import { UserexpensesComponent } from './component/manager-comp/userexpenses/userexpenses.component';
import { ProfileComponent } from './component/profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
import {ManagerhomeComponent} from './pages/managerhome/managerhome.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:"/login",
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent,
  },
  {
    path:'expenses',
    component:ManagerhomeComponent,
    children:[
      {
        path:'',
        component:UserexpensesComponent
      },
      {
        path:'profile',
        component:ProfileComponent,
      },
      {
        path:'add',
        component:AddExpenseComponent
      },
      {
        path:'approve',
        component:AddExpenseComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
