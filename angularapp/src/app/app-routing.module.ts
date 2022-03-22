import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AddExpenseComponent } from './components/user-comp/add-expense/add-expense.component';
import { AdminComponent } from './components/user-comp/admin/admin.component';
import { DashboardComponent } from './components/user-comp/dashboard/dashboard.component';
import { ManagerApproveComponent } from './components/user-comp/manager-approve/manager-approve.component';
import { UserexpensesComponent } from './components/user-comp/userexpenses/userexpenses.component';
import { AdminGuard } from './guard/admin.guard';
import { EmployeeGuard } from './guard/employee.guard';
import { ManagerGuard } from './guard/manager.guard';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { UserhomeComponent } from './pages/userhome/userhome.component';

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
    path:'signup',
    component:RegisterComponent,
  },
  {
   path:'admin',
   component:UserhomeComponent,
   children:[
     {
       path:'',
       component:AdminComponent,
     },
     {
      path:'profile',
      component:ProfileComponent
    },
   ],
   canActivate:[AdminGuard],
  },
  {
    path:'employee',
    component:UserhomeComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'expenses',
        component:UserexpensesComponent
      },
      {
        path:'add',
        component:AddExpenseComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ],
    canActivate:[EmployeeGuard]
  },
  {
    path:'manager',
    component:UserhomeComponent,
    children:[
      {
        path:'',
        component:DashboardComponent
      },
      {
        path:'profile',
        component:ProfileComponent
      },
      {
        path:'expenses',
        component:UserexpensesComponent
      },
      {
        path:'add',
        component:AddExpenseComponent
      },
      {
        path:'approve',
        component:ManagerApproveComponent
      },
      {
        path:'dashboard',
        component:DashboardComponent
      }
    ],
    canActivate:[ManagerGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
