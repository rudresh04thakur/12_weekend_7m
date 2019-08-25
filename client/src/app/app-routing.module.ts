import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { RegisterComponent } from './register/register.component';
import { ListComponent } from './list/list.component'
import { ViewComponent } from './view/view.component';
import { EditComponent } from './edit/edit.component';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path:"",component:HomeComponent},
  {path:"home",component:HomeComponent},
  {path:"login",component:LoginPageComponent},
  {path:"register",component:RegisterComponent},
  {path:'list',component:ListComponent, children:[
    {path:'view/:id',component:ViewComponent},
    {path:'register', component:RegisterComponent} //list/view/121
  ],canActivate:[AuthGuard]},
  // {path:'edit/:id',component:EditComponent},
   {path:'edit/:id',component:RegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
