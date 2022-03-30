import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AddExpenseComponent } from './components/user-comp/add-expense/add-expense.component';
import { AdminComponent } from './components/user-comp/admin/admin.component';
import { EmployeeDashboardComponent } from './components/user-comp/dashboards/employee-dashboard/employee-dashboard/employee-dashboard.component';
import { ManagerApproveComponent } from './components/user-comp/manager-approve/manager-approve.component';
import { UserexpensesComponent } from './components/user-comp/userexpenses/userexpenses.component';
import { AdminGuard } from './guard/admin.guard';
import { EmployeeGuard } from './guard/employee.guard';
import { ManagerGuard } from './guard/manager.guard';
import { LoginComponent } from './pages/login/login.component';
import { NotAuthorizedComponent } from './pages/not-authorized/not-authorized.component';
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
    path:'notAuthorized',
    component:NotAuthorizedComponent,
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
        component:EmployeeDashboardComponent
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
        component:AddExpenseComponent,
      },
      {
        path:'dashboard',
        component:EmployeeDashboardComponent
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
        component:EmployeeDashboardComponent
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
        component:EmployeeDashboardComponent
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
