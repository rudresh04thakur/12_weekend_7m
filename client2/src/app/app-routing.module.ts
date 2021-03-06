import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FrontComponent } from './front/front.component';
import { HomeComponent } from './front/home/home.component';
import { ProductsComponent } from './front/products/products.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:FrontComponent, children:[  
    {path:"",component:HomeComponent},
    {path:"products/:cat",component:ProductsComponent}
  ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
