import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProfileComponent } from './components/profile/profile.component';
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
    path:'expenses',
    component:UserhomeComponent,
    children:[
      {
        path:'',
        component:ProfileComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
