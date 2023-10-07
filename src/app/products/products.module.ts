import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { DetailComponent } from './pages/detail/detail.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { CategoryComponent } from './pages/category/category.component';
import { CategoryTitleComponent } from './components/category-title/category-title.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { NgxPaginationModule } from 'ngx-pagination';


@NgModule({
  declarations: [
    DetailComponent,
    ProductCardComponent,
    CategoryComponent,
    CategoryTitleComponent,
    ProductListComponent,
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    NgxPaginationModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ProductsModule { }
