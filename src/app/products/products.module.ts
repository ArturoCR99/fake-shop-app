import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { CategoryComponent } from './pages/category/category.component';


@NgModule({
  declarations: [
    CategoryComponent,
    DetailComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule { }
