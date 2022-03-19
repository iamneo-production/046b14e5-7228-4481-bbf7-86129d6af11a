import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './profile/profile.component';
import { LoginComponent } from './pages/login/login.component';
const routes: Routes = [
  {
    path:'',
    redirectTo:"/login",
    pathMatch:'full',
  },
  {
    path:'login',
    component:LoginComponent

  },
  {
    path:'admin',
    component:AdminComponent
  },

  {
    path:'profile',
    component:ProfileComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }