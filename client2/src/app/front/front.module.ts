import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FrontRoutingModule } from './front-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HeaderComponent } from './partial/header/header.component';
import { FooterComponent } from './partial/footer/footer.component';
import { FrontComponent } from './front.component';
import { ProductsComponent } from './products/products.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [HomeComponent, AboutComponent, HeaderComponent, FooterComponent, FrontComponent, ProductsComponent],
  imports: [
    CommonModule,
    FrontRoutingModule,
    HttpClientModule
  ]
})
export class FrontModule { }
