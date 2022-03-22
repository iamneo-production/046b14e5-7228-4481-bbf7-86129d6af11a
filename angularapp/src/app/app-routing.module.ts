import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
import { AddExpenseComponent } from './components/user-comp/add-expense/add-expense.component';
import { AdminComponent } from './components/user-comp/admin/admin.component';
import { EmployeeDashboardComponent } from './components/user-comp/dashboards/employee-dashboard/employee-dashboard/employee-dashboard.component';
import { ManagerDashboardComponent } from './components/user-comp/dashboards/manager-dashboard/manager-dashboard/manager-dashboard.component';
import { ManagerApproveComponent } from './components/user-comp/manager-approve/manager-approve.component';
import { ManagerExpenseComponent } from './components/user-comp/manager-expense/manager-expense.component';
import { UserexpensesComponent } from './components/user-comp/userexpenses/userexpenses.component';
import { ViewExpenseComponent } from './components/user-comp/view-expense/view-expense.component';
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
   ]
  },
  {
    path:'expenses',
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
        path:'add',
        component:AddExpenseComponent,
      },
      {
        path:'view',
        component:UserexpensesComponent,
      },
      {
        path:'dashboard/employee',
        component:EmployeeDashboardComponent,

        children:[
          {
            path:'totalexp',
            component:UserexpensesComponent
          },
          {
            path:'pendingexp',
            component:UserexpensesComponent
          },
          {
            path:'approvedexp',
            component:UserexpensesComponent
          },],
        },
    ]
  },
  {
    path:'manager',
    component:UserhomeComponent,

    children:[
      {
        path:'',
        component:ManagerDashboardComponent
      },
      {
        path:'profile',
        component:ProfileComponent
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
        path:'dashboard/man',
        component:ManagerDashboardComponent
      },
      {
        path:'view',
        component:ManagerExpenseComponent
      },
    ]
  },
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
